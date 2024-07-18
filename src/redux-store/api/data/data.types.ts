import {QueryReturnValue} from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import {MaybePromise} from "@reduxjs/toolkit/dist/query/tsHelpers";

export type TFetchBQ<GResult = unknown> = (arg: unknown) => MaybePromise<QueryReturnValue<GResult, unknown, {}>>

export interface IResponse<GData> {
    count: number | null
    next: boolean | null
    previous: boolean | null
    results: Array<GData>
}


export interface IGetPricesParams {
    timestamp?: number
}

//Zone types

export interface IZoneResponse {
    id: number,
    datetime_from: number,
    datetime_to: number,
    zone_name: string
}

export interface IZone {
    id: number,
    datetimeFrom: number,
    datetimeTo: number,
    zoneName: string
}

//Price types
export interface IPriceResponse {
    id: number;
    available_quantity: number,
    client_price: number,
    delivery_date: string,
    delivery_price_id: number,
    is_active: boolean,
    min_quantity: number;
    sku_id: number
    supplier_id: number
    zone_id: number
}

export interface IPrice {
    id: number;
    availableQuantity: number;
    clientPrice: number;
    deliveryDate: string
    isActive: boolean,
    deliveryPriceId: number
    minQuantity: number;
    skuId: number
    supplierId: number
    zoneId: number
}

//Sku types

export interface ISkuResponse {
    id: number;
    product: ISkuProductResponse,
    spec_lines: ISkuSpecLinesResponse[];
}

export interface ISkuProductResponse {
    id: number;
    product_name: string;
    brand: ISkuBrandResponse
    category: ISkuCategoryResponse
}


export interface ISkuCategoryResponse {
    id: number;
    category_name: string;
    mask: string
}

export interface ISkuBrandResponse {
    id: number;
    brand_name: string;
}

export interface ISkuSpecLinesResponse {
    id: number;
    spec_name: string;
    value: string;
    spec_slug: string
}

export interface ISku {
    id: number;
    product: ISkuProduct;
    specLines: ISkuSpecLines[];
    skuName?: string
}

export interface ISkuCategory {
    id: number;
    categoryName: string;
    mask: string
}

export interface ISkuBrand {
    id: number;
    brandName: string;
}

export interface ISkuProduct {
    id: number;
    productName: string;
    brand: ISkuBrand;
    category: ISkuCategory;
}

export interface ISkuSpecLines {
    id: number;
    specName: string;
    value: string;
    specSlug: string
}


//Currency types

export type TCurrency = Record<string, number>


//Combine data

export type TPriceWithZone = IPrice & {
    zone: IZone
}


export type TEnrichedPrice = IPrice & TPriceWithZone & {
    unusedSpecLines: Record<string, ISkuSpecLines>,
    specLines: Record<string, ISkuSpecLines>,
    skuData: ISku,
}

export type TEnrichedSkuData = Omit<ISku, 'specLines'> & {
    unusedSpecLines: Record<string, ISkuSpecLines>,
    specLines: Record<string, ISkuSpecLines>,
    formedProductName: string
}

export interface IMultiSelectOption {
    name: string,
    id: number | string
}

export interface ISelectOption extends IMultiSelectOption {
}


export type TIntermediateTableData = Omit<ISku, 'specLines'> & {
    prices: TPriceWithZone[],
    specLines: Record<string, ISkuSpecLines>,
}

export type TTableData = {
    prices: TEnrichedPrice[],
    formedItemName?: string,
    skuList: Record<string, ISku>,
    orderList: IEnrichedOrderLine[],
    ordersSummaryCount: number
}

export type TTableDataWithAssociativePrices = Omit<TTableData, 'prices' | 'orderList'> & {
    prices: Record<string, TEnrichedPrice>,
    orderList: Record<string, IEnrichedOrderLine>,
}

export type TCombineResponseTableData = {
    tableData: Record<string, TTableDataWithAssociativePrices>,
    categoriesList: Record<string, IMultiSelectOption>,
    brandsList: Record<string, IMultiSelectOption>,
    zoneList: Record<string, IZone>,
    orderDataByZone: Record<string, IEnrichedOrder>,
    enrichedSkuList: Record<string, TEnrichedSkuData>
};


// Order

export interface IOrderLineResponse {
    id: number
    line_quantity: number,
    delivery_price_value: number
    line_price: number,
    delivery_date: string,
    sku: number
}

export interface ICreateOrderLineResponse {
    body: {
        price: number,
        line_quantity: number,
        delivery_price: number
    }
    // Технические сущности для дальнейшего добавления ордера
    zone: IZone
    formedItemName: string
    uniquePriceKey: string
    specLines: Record<string, ISkuSpecLines>,
    unusedSpecLines: Record<string, ISkuSpecLines>,
}


export interface IOrderResponse {
    id: number,
    zone: number,
    orderline_set: IOrderLineResponse[]
}

export interface IOrderLine {
    id: number
    lineQuantity: number,
    deliveryPriceValue: number,
    linePrice: number,
    deliveryDate: string,
    sku: number,
}

export interface IOrder {
    id: number,
    zone: number,
    orderlineSet: IOrderLine[]
}

export interface IEnrichedOrderLine extends IOrderLine {
    zone: IZone,
    specLines?: Record<string, ISkuSpecLines>
    unusedSpecLines?: Record<string, ISkuSpecLines>
}

export interface IEnrichedOrder {
    id: number,
    zone: IZone,
    orderlineSet: Record<string, IEnrichedOrderLine>
}

export interface IMaskData {
    maskField: string,
    maskMode: string,
    originalFieldKey: string
}


export type TUseFilteredTableData = {
    filteredData: Record<string, TTableData>,
    isInitialDataEmpty: boolean,
    isFilteredDataEmpty: boolean
}