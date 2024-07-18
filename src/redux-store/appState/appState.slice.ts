import type {PayloadAction, Slice} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {ECurrency} from "constants/index";
import {IMultiSelectOption} from "redux-store/api";
import {initialState} from './appState.constants';
import {ESortStatus, IAppState, IOrderModelData} from './appState.types';

const appStateSlice: Slice<IAppState> = createSlice({
    name: 'appState',
    initialState,
    reducers: {
        setPriceDrawerItemName(state, action: PayloadAction<string | undefined>) {
            state.priceDrawerItemName = action.payload
        },
        setMainTableCurrency(state, action: PayloadAction<ECurrency>) {
            state.mainTableCurrency = action.payload
        },
        setOrderModal(state, action: PayloadAction<IOrderModelData | undefined>) {
            state.orderModal = action.payload
        },
        setLoginMode(state, action: PayloadAction<boolean>) {
            state.isLogged = action.payload;
        },
        setSearchFilter(state, action: PayloadAction<string | undefined>) {
            state.tableFilters.search = action.payload;
        },
        setBrandFilter(state, action: PayloadAction<Record<string, IMultiSelectOption>>) {
            state.tableFilters.brand = action.payload;
        },
        setCategoryFilter(state, action: PayloadAction<Record<string, IMultiSelectOption>>) {
            state.tableFilters.category = action.payload;
        },
        setInStockFilter(state, action: PayloadAction<Record<string, IMultiSelectOption>>) {
            state.tableFilters.inStock = action.payload;
        },
        setZoneFilter(state, action: PayloadAction<Record<string, IMultiSelectOption>>) {
            state.tableFilters.zone = action.payload;
        },
        setSortingFilter(state, action: PayloadAction<ESortStatus>) {
            state.tableFilters.sorting = action.payload;
        },
        setCurrency(state, action: PayloadAction<ECurrency>) {
            state.currency = action.payload;
        },
    },

})

export const {
    setLoginMode,
    setSearchFilter,
    setCategoryFilter,
    setBrandFilter,
    setZoneFilter,
    setCurrency,
    setSortingFilter,
    setPriceDrawerItemName,
    setOrderModal,
    setInStockFilter,
    setMainTableCurrency,
} = appStateSlice.actions

export default appStateSlice.reducer