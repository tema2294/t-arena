import {ECurrency} from "constants/index";
import {IMultiSelectOption, TCombineResponseTableData, TEnrichedPrice} from "redux-store/api";

export interface IAppState {
    isLogged: boolean;
    tableFilters: ITableFilters
    currency: string,
    mainTableCurrency: ECurrency
    priceDrawerItemName?: string,
    orderModal?: IOrderModelData
    tableData?: TCombineResponseTableData
}

export interface IOrderModelData extends TEnrichedPrice {
    formedItemName: string
}

export enum ESortStatus {
    Default = 0,
    Asc,
    Desc,
}

export interface ITableFilters {
    [ETableFilter.Search]?: string
    [ETableFilter.Brand]?: Record<string, IMultiSelectOption>
    [ETableFilter.Zone]?: Record<string, IMultiSelectOption>
    [ETableFilter.Category]?: Record<string, IMultiSelectOption>
    [ETableFilter.Sorting]?: ESortStatus
    [ETableFilter.InStock]?: Record<string, IMultiSelectOption>
}


export enum ETableFilter {
    Search = 'search',
    Brand = 'brand',
    Zone = 'zone',
    Category = 'category',
    Sorting = 'sorting',
    InStock = 'inStock',
}