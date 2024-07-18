import {QueryReturnValue} from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import {
    IEnrichedOrder,
    IEnrichedOrderLine,
    IMultiSelectOption,
    IOrder,
    IOrderResponse,
    IPrice,
    IPriceResponse,
    IResponse,
    ISku,
    ISkuResponse,
    IZone,
    IZoneResponse,
    TCombineResponseTableData,
    TEnrichedPrice,
    TEnrichedSkuData,
    TFetchBQ,
    TPriceWithZone,
    TTableDataWithAssociativePrices
} from "redux-store/api";
import {EApiMethods} from "redux-store/api/api.constants";
import {TBaseQueryReturnType} from "redux-store/api/api.types";
import {formatBETimeStamp, getUTCTimeStamp} from "tools/date";
import {EObjectFields, getAssociativeObject} from "tools/get-associative-object";
import {getFormedItemName} from "tools/get-formed-item-name";
import {getPriceUniqueKey} from "tools/get-price-unique-key";
import {getSortingPrices} from "tools/get-sorting-prices";
import {formatDeepSnakeObjKeysToCamelCase} from "tools/snake-to-camel-case";

export const fetchWithPagination = async <GResult, GResponse>(url: string, baseQuery: TFetchBQ): Promise<QueryReturnValue<GResult[], any, any>> => {
    const {data} = await baseQuery({url, method: EApiMethods.Get}) as TBaseQueryReturnType<IResponse<GResponse>>;
    const {count, results = []} = data || {};

    const resultLength = results?.length;

    if (resultLength === 0) {
        return {data: []}; // Early return if no results
    }

    const countPages = Math.ceil((count || 0) / resultLength);

    // Perform all requests in parallel
    const promises = [];
    for (let i = 2; i <= countPages; i++) {
        promises.push(baseQuery({
            url: `${url}?page=${i}`,
            method: EApiMethods.Get
        }));
    }

    const responses = await Promise.all(promises);

    // Combine results
    const combinedResults = [...results]; // Start with initial results
    responses.forEach(response => {
        if (response.data) {
            combinedResults.push(...(response.data as any)?.results);
        }
    });

    const formatData = formatDeepSnakeObjKeysToCamelCase<GResult[]>(combinedResults);

    return {data: formatData};
};

export const getAssociativePriceList = (priceList: IPrice[], associativeZoneList: Record<string, IZone>): Record<string, TPriceWithZone[]> => {
    const associativePriceListBySku: Record<string, TPriceWithZone[]> = {};

    priceList.forEach((priceData) => {
        const {skuId, zoneId, deliveryPriceId} = priceData || {};
        const formatPriceData: TPriceWithZone = {
            ...priceData, zone: (associativeZoneList[zoneId] || {})
        }

        associativePriceListBySku[skuId] = [...(associativePriceListBySku[skuId] || []), formatPriceData]
    })


    const sortingAssociativePriceListBySku = Object.entries(associativePriceListBySku).reduce((result, [skuId, priceList]) => {
        const sortedPriceList = getSortingPrices(priceList);
        result[skuId] = sortedPriceList;

        return result;

    }, {} as Record<string, TPriceWithZone[]>);

    return sortingAssociativePriceListBySku;
}


// фукция парсит строку с маской и возвращает массив свойств которые нужно получить, вида [fieldName, name или value]


export const fetchAndCombineTableData = async (baseQuery: TFetchBQ): Promise<QueryReturnValue<TCombineResponseTableData, any, any>> => {
    const zoneResponse = baseQuery({
        url: '/zone',
        method: EApiMethods.Get
    }) as TBaseQueryReturnType<IResponse<IZoneResponse>>;
    const skuResponse = fetchWithPagination<ISku, ISkuResponse>('/sku', baseQuery);
    const ordersResponse = fetchWithPagination<IOrder, IOrderResponse>('/order', baseQuery);

    const priceResponse = baseQuery({
        url: '/price',
        method: EApiMethods.Get
    }) as TBaseQueryReturnType<IPriceResponse[]>;

    const [zonePromise, skuPromise, pricePromise, orderPromise] = await Promise.all([zoneResponse, skuResponse, priceResponse, ordersResponse]);

    const {data: zoneData} = zonePromise || {};
    const {data: skuData = []} = skuPromise || {};
    const {data: orderData = []} = orderPromise || {};
    const {data: priceData = []} = pricePromise || {};

    const {results: zoneDataResults = []} = zoneData || {};
    const nowTimestamp = getUTCTimeStamp();
    const filteredZone = zoneDataResults.filter(({datetime_to}) => formatBETimeStamp(datetime_to) > nowTimestamp);
    const formatZone = formatDeepSnakeObjKeysToCamelCase<IZone[]>(filteredZone || []);
    const formatPrices = formatDeepSnakeObjKeysToCamelCase<IPrice[]>(priceData)
    const associativeZoneList = getAssociativeObject(formatZone, EObjectFields.Id)
    const associativePriceListBySku = getAssociativePriceList(formatPrices, associativeZoneList)
    const hasPrices = formatPrices.length > 0;

    const orderDataBySkuId: Record<string, Record<string, IEnrichedOrderLine>> = {};
    const orderDataByZone: Record<string, IEnrichedOrder> = {};


    orderData.forEach((order) => {
        const {orderlineSet = [], id, zone} = order;
        const enrichedZone = associativeZoneList[zone] || {};

        orderDataByZone[zone] = {
            zone: enrichedZone,
            id,
            orderlineSet: {}
        };

        orderlineSet.forEach((order) => {
            const {sku: skuId, id: orderId} = order;

            orderDataBySkuId[skuId] = {...(orderDataBySkuId[skuId] || {}), [orderId]: {...order, zone: enrichedZone}}
            orderDataByZone[zone].orderlineSet[orderId] = {...order, zone: enrichedZone};
        })
    });

    const categoriesList: Record<string, IMultiSelectOption> = {};
    const brandsList: Record<string, IMultiSelectOption> = {};
    const combineTableData: Record<string, TTableDataWithAssociativePrices> = {}
    const enrichedSkuList: Record<string, TEnrichedSkuData> = {};

    if (hasPrices) {
        skuData.forEach((skuData) => {
            const {id: skuId, product, specLines = []} = skuData;
            const {specLines: _specs, ...skuDataWithoutSpecs} = skuData;
            const {category, brand, productName} = product || {};
            const {id: categoryId, categoryName} = category || {};
            const {id: brandId, brandName} = brand || {};
            const hasBrand = !!brandId;
            const hasCategory = !!categoryId;

            const associativeSpecLine = getAssociativeObject(specLines, 'specSlug');
            const prices = associativePriceListBySku[skuId] || [];

            if (hasCategory) {
                categoriesList[categoryId] = {id: categoryId, name: categoryName};
            }

            if (hasBrand) {
                brandsList[brandId] = {id: brandId, name: brandName}
            }


            const enrichedTableItem = {
                ...skuData,
                specLines: associativeSpecLine,
                prices,
            };

            const {formedItemName, unusedSpecLines} = getFormedItemName(enrichedTableItem);

            enrichedSkuList[skuId] = {
                ...skuDataWithoutSpecs,
                specLines: associativeSpecLine,
                unusedSpecLines: unusedSpecLines, formedProductName: formedItemName,
            };

            const enrichedPrices: Record<string, TEnrichedPrice> = prices.reduce((result, price) => {
                result[getPriceUniqueKey(price)] = {
                    ...price,
                    specLines: associativeSpecLine,
                    unusedSpecLines,
                    skuData,
                }

                return result
            }, {} as Record<string, TEnrichedPrice>)

            Object.keys(orderDataBySkuId[skuId] || {}).forEach((orderId) => {
                const hasOrder = !!orderDataBySkuId[skuId][orderId];
                if (!hasOrder) return;
                orderDataBySkuId[skuId][orderId].specLines = associativeSpecLine
                orderDataBySkuId[skuId][orderId].unusedSpecLines = unusedSpecLines
            })

            const orders = (orderDataBySkuId[skuId] || {});
            const ordersCount = Object.values(orders).reduce((result, order) => (order?.lineQuantity || 0) + result, 0);

            return combineTableData[formedItemName] = {
                formedItemName,
                orderList: orders,
                ordersSummaryCount: ordersCount,
                skuList: {
                    ...(combineTableData[formedItemName]?.skuList || []),
                    [skuId]: {...skuData, prices: enrichedPrices}
                },
                prices: {...(combineTableData[formedItemName]?.prices || {}), ...enrichedPrices}
            }
        });
    }

    return {
        data: {
            tableData: combineTableData,
            brandsList,
            categoriesList,
            orderDataByZone,
            zoneList: associativeZoneList,
            enrichedSkuList,
        }
    };

}