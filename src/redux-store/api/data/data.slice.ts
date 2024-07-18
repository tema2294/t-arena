import {createApi} from '@reduxjs/toolkit/query/react';
import {
    ICreateOrderLineResponse,
    IGetPricesParams,
    IOrder,
    IOrderLine,
    IPrice,
    IPriceResponse,
    TCombineResponseTableData,
    TCurrency
} from "redux-store/api";
import {formatDeepSnakeObjKeysToCamelCase} from "tools/snake-to-camel-case";
import {baseQueryWithReauth} from "../api.baseQueryWithReauth";
import {EApiMethods} from "../api.constants";
import {fetchAndCombineTableData, fetchWithPagination} from "./data.tools";


const DataSlice = createApi({
    reducerPath: 'dataApi',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getReference: builder.query<any, void>({
            query: () => ({
                url: '/reference',
                method: EApiMethods.Get,
            }),
        }),
        getCurrencies: builder.query<TCurrency, void>({
            query: () => ({
                url: '/currencies',
                method: EApiMethods.Get,
            }),
            transformResponse: (response: TCurrency) => response,
        }),
        getPrices: builder.query<IPrice[], IGetPricesParams>({
            query: ({timestamp}) => ({
                url: `/price?timestamp=${timestamp}`,
                method: EApiMethods.Get,
            }),
            serializeQueryArgs: () => 'getPrices',
            transformResponse: (data: IPriceResponse[]) => formatDeepSnakeObjKeysToCamelCase(data || []),
        }),
        getOrders: builder.query<IOrder[], void>({
            queryFn: (_arg, _api, _extraOptions, baseQuery) => fetchWithPagination('/order', baseQuery),
        }),
        getCombineData: builder.query<TCombineResponseTableData, void>({
            queryFn: async (_arg, _queryApi, _extraOptions, baseQuery) => {
                return await fetchAndCombineTableData(baseQuery);
            },
            serializeQueryArgs: () => 'getCombineData',
        }),
        createOrder: builder.mutation<IOrderLine, ICreateOrderLineResponse>({
            query: ({body}) => ({
                url: '/order/line',
                method: EApiMethods.Post,
                body,
            }),
            transformResponse: (response: ICreateOrderLineResponse) => formatDeepSnakeObjKeysToCamelCase<IOrderLine>(response),
            async onQueryStarted(arg, {dispatch, queryFulfilled, getState}) {
                try {
                    const {
                        zone,
                        formedItemName,
                        uniquePriceKey,
                        body: {line_quantity: orderLineQuantity},
                        specLines,
                        unusedSpecLines
                    } = arg;
                    const {data: orderData} = await queryFulfilled;
                    const {id: orderId, lineQuantity: nextOrderLineQuantityValue, sku} = orderData;

                    dispatch(DataSlice.util.updateQueryData('getCombineData', undefined, (data: TCombineResponseTableData) => {

                        const prevOrderData = data.orderDataByZone[zone.id].orderlineSet[orderId] || {lineQuantity: 0};

                        const updatedOrder = {
                            ...prevOrderData,
                            ...orderData,
                            lineQuantity: nextOrderLineQuantityValue,
                            specLines, unusedSpecLines
                        };

                        data.orderDataByZone[zone.id].orderlineSet[orderId] = updatedOrder;

                        const {availableQuantity} = data.tableData[formedItemName].prices[uniquePriceKey];

                        const updatedPrice = availableQuantity - orderLineQuantity;
                        const isPriceActive = !!updatedPrice && updatedPrice > 0;

                        if (isPriceActive) {
                            data.tableData[formedItemName].prices[uniquePriceKey].availableQuantity = updatedPrice
                        } else {
                            delete data.tableData[formedItemName].prices[uniquePriceKey];
                        }

                        data.tableData[formedItemName].ordersSummaryCount += orderLineQuantity;


                        data.tableData[formedItemName].orderList[orderId] = updatedOrder;

                    }));
                } catch (error) {
                    // Обработка ошибок, если необходимо
                    console.error('Error in createOrder mutation:', error);
                }
            }
        })
    }),
});

export const {
    useGetOrdersQuery,
    useGetReferenceQuery,
    useGetCombineDataQuery,
    useGetCurrenciesQuery,
    useCreateOrderMutation
} = DataSlice;
export default DataSlice;