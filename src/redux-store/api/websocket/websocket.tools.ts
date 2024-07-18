import {getPriceUniqueKey} from "tools/get-price-unique-key";
import {TAppDispatch, TRootState} from "../../types";
import DataSlice from "../data/data.slice";
import {TCombineResponseTableData, TEnrichedPrice} from "../data/data.types";

export interface IWebsocketMessage {
    id: string,
    result: {
        model: "sku" | 'zone' | 'price'
    }
}

export interface IWebsocketEvent {
    data: string
}


export const socketController = async (message: IWebsocketMessage, dispatch: TAppDispatch, state: TRootState): Promise<void> => {
    const {result} = message || {};

    const {model} = result || {};


    switch (model) {

        case 'price': {
            const {
                startedTimeStamp: firstResponse,
                data: combineTableData
            } = state.dataApi?.queries['getCombineData'] || {};

            const {enrichedSkuList, zoneList,} = (combineTableData || {}) as TCombineResponseTableData;
            const nextResponse = state.dataApi?.queries['getPrices']?.startedTimeStamp

            const lastPriceTimestamp = (nextResponse || firstResponse || 0) / 1000;

            console.log('отправлен запрос:', lastPriceTimestamp);

            const {data: newPrices} = await dispatch(DataSlice.endpoints?.getPrices.initiate({timestamp: lastPriceTimestamp}, {forceRefetch: true}));

            dispatch(DataSlice.util.updateQueryData('getCombineData', undefined, (data: TCombineResponseTableData) => {
                (newPrices || []).forEach((price) => {

                    const {skuId, zoneId, id, deliveryPriceId} = price || {};

                    const {
                        specLines,
                        unusedSpecLines,
                        formedProductName,
                        ...otherSkuData
                    } = enrichedSkuList[skuId] || {}
                    const zone = zoneList[zoneId] || {};


                    const enrichedPrice: TEnrichedPrice = {
                        ...price,
                        zone,
                        unusedSpecLines,
                        specLines,
                        skuData: {
                            ...otherSkuData,
                            specLines: Object.values(specLines)
                        }
                    };

                    const prevData = data.tableData[formedProductName];
                    const priceUniqueKey = getPriceUniqueKey({deliveryPriceId, id});

                    const updatedCurrentTableItem = {
                        ...prevData,
                        prices: {
                            ...prevData.prices,
                            [priceUniqueKey]: enrichedPrice,
                        },
                    };

                    data.tableData[formedProductName] = updatedCurrentTableItem
                })
            }));

            console.log("////// ЦЕНЫ БЫЛИ ОБНОВЛЕНЫ")
            break;
        }
    }
}