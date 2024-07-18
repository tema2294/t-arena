import {createSelector} from '@reduxjs/toolkit';

import type {TRootState} from 'redux-store/types';
import {ESortStatus, IAppState} from "./appState.types";


const selectAppState = (state: TRootState): IAppState => state.appState;
const selectDataApi = (state: TRootState): TRootState['dataApi'] => state.dataApi;

export const selectIsUserLogged = createSelector(selectAppState, (appState: IAppState) => appState.isLogged);
export const selectTableFilters = createSelector(selectAppState, (appState: IAppState) => appState.tableFilters);
export const selectMainTableCurrency = createSelector(selectAppState, (appState: IAppState) => appState.mainTableCurrency);
export const selectCurrency = createSelector(selectAppState, (appState: IAppState) => appState.currency || '');
export const selectSearchFilter = createSelector(selectTableFilters, tableFilters => tableFilters.search || '');
export const selectBrandFilter = createSelector(selectTableFilters, tableFilters => tableFilters.brand || {});
export const selectCategoryFilter = createSelector(selectTableFilters, tableFilters => tableFilters.category || {});
export const selectZoneFilter = createSelector(selectTableFilters, tableFilters => tableFilters.zone || {});
export const selectInStockFilter = createSelector(selectTableFilters, tableFilters => tableFilters.inStock || {});
export const selectSortingFilter = createSelector(selectTableFilters, tableFilters => tableFilters.sorting || ESortStatus.Default);
export const selectPriceDrawerItemName = createSelector(selectAppState, (appState) => appState.priceDrawerItemName || '');
export const selectOrderModalData = createSelector(selectAppState, (appState) => appState.orderModal);

export const selectQueries = createSelector(selectDataApi, (apiState) => apiState.queries)

