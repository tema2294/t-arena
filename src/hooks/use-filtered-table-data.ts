import {useMemo} from "react";
import {TTableData, TUseFilteredTableData, useGetCombineDataQuery} from "redux-store/api";
import {selectBrandFilter, selectCategoryFilter, selectSearchFilter, selectZoneFilter} from "redux-store/appState";
import {ESortStatus} from "redux-store/appState/appState.types";
import {useAppSelector} from "redux-store/hooks";
import {getAssociativeObject} from "tools/get-associative-object";
import {getSortingPrices} from "tools/get-sorting-prices";

const SORTING_FUNCTION = {
    [ESortStatus.Default]: (element: TTableData, nextElement: TTableData) => {
        const firstElementName = element?.formedItemName || '';
        const nextElementName = nextElement?.formedItemName || '';

        if (firstElementName < nextElementName) {
            return -1;
        }
        if (firstElementName > nextElementName) {
            return 1;
        }

        return 0;
    },
}

export const sortByFormedName = (data: TTableData[]): TTableData[] => {
    const sortingFunction = SORTING_FUNCTION[ESortStatus.Default];

    return [...data].sort(sortingFunction)
}
export const useFilteredTableData = (): TUseFilteredTableData => {
    const {data} = useGetCombineDataQuery();
    const {tableData = []} = data || {};
    const tableDataList = Object.values(tableData);
    const searchFilterValue = useAppSelector(selectSearchFilter);
    const brandFilter = useAppSelector(selectBrandFilter);
    const categoryFilter = useAppSelector(selectCategoryFilter);
    const zoneFilter = useAppSelector(selectZoneFilter);

    const isInitialDataEmpty = tableDataList.length === 0;

    const filteredData = useMemo(() => {
        console.log('update Data')
        const hasBrandFilter = Object.keys(brandFilter).length > 0;
        const hasCategoryFilter = Object.keys(categoryFilter).length > 0;
        const hasZoneFilter = Object.keys(zoneFilter).length > 0;
        const hasSearchFilterValue = !!searchFilterValue;
        const filteredDataList: TTableData[] = [];

        tableDataList.forEach((tableElement) => {
            const {
                prices = [], orderList, formedItemName = ''
            } = tableElement;

            const priceArray = Object.values(prices)

            const filteredPrices = priceArray.filter((price) => {
                const {zoneId, skuData, isActive} = price;
                const {product} = skuData || {};
                const {brand, category} = product || {};
                const {id: brandId = ''} = brand || {};
                const {id: categoryId = ''} = category || {};
                const isPassedZoneFilter = hasZoneFilter ? !!zoneFilter[zoneId] : true;
                const isPassedBrandFilter = hasBrandFilter ? !!brandFilter[brandId] : true;
                const isPassedCategoryFilter = hasCategoryFilter ? !!categoryFilter[categoryId] : true;

                const combinePriceFilterResult = isPassedZoneFilter && isPassedBrandFilter && isPassedCategoryFilter && !!isActive;

                return combinePriceFilterResult;
            })

            const sortedPrices = getSortingPrices(filteredPrices)
            const isPricesNotEmpty = sortedPrices.length > 0;


            const formatProductName = formedItemName.toLowerCase();
            const isPassedSearchFilter = hasSearchFilterValue ? formatProductName.includes(searchFilterValue.toLowerCase()) : true;

            const isPassedAll = isPricesNotEmpty && isPassedSearchFilter;

            if (!isPassedAll) return;

            filteredDataList.push({...tableElement, prices: sortedPrices, orderList: Object.values(orderList)})
        });

        const sortingDataByFormedName = sortByFormedName(filteredDataList);

        return getAssociativeObject(sortingDataByFormedName, 'formedItemName')
    }, [tableData, brandFilter, categoryFilter, zoneFilter, searchFilterValue]);


    const isFilteredDataEmpty = Object.keys(filteredData).length === 0;

    return {filteredData, isInitialDataEmpty, isFilteredDataEmpty};
}