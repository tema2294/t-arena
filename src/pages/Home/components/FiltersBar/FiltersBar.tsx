import {Multiselect} from "components/Multiselect";
import {EDictionaryKey, useLocalization, useTranslation} from "hocs/Localization";
import React, {useMemo} from "react";
import {IMultiSelectOption, useGetCombineDataQuery} from "redux-store/api";
import {
    selectBrandFilter,
    selectCategoryFilter,
    selectInStockFilter,
    selectZoneFilter,
    setBrandFilter,
    setCategoryFilter,
    setInStockFilter,
    setZoneFilter
} from "redux-store/appState";
import {useAppDispatch, useAppSelector} from "redux-store/hooks";
import {SearchFilter} from "../SearchFilter";
import {Container} from "./FiltersBar.styles";

export const FiltersBar = () => {
    const {translate} = useTranslation();
    const {language} = useLocalization();

    const brandFilter = useAppSelector(selectBrandFilter);
    const categoryFilter = useAppSelector(selectCategoryFilter);
    const zoneFilter = useAppSelector(selectZoneFilter);
    const inStockFilter = useAppSelector(selectInStockFilter);
    const dispatch = useAppDispatch();

    const {data} = useGetCombineDataQuery();
    const {brandsList, categoriesList, zoneList} = data || {};

    const handleChangeBrandFilter = (nextValue: Record<string, IMultiSelectOption>): void => {
        dispatch(setBrandFilter(nextValue));
    }
    const handleChangeCategoryFilter = (nextValue: Record<string, IMultiSelectOption>): void => {
        dispatch(setCategoryFilter(nextValue));
    }
    const handleChangeZoneFilter = (nextValue: Record<string, IMultiSelectOption>): void => {
        dispatch(setZoneFilter(nextValue));
    }
    const handleChangeInStockFilter = (nextValue: Record<string, IMultiSelectOption>): void => {
        dispatch(setInStockFilter(nextValue));
    }

    const inStockOptions = useMemo(() => [{
        name: translate(EDictionaryKey.Stock),
        id: '1'
    }, {name: translate(EDictionaryKey.MyProducts), id: '2'}], [language]);

    const formatBrandsList = Object.values(brandsList || {});
    const formatCategoriesList = Object.values(categoriesList || {});
    const formatZoneList = Object.values(zoneList || {}).map((zoneData) => {
        const {zoneName, id} = zoneData;

        return {name: zoneName, id};
    });

    return (
        <Container>
            <SearchFilter/>
            <Multiselect name={translate(EDictionaryKey.InStock)} value={inStockFilter}
                         handleChange={handleChangeInStockFilter}
                         options={inStockOptions}
                         paperTitle={translate(EDictionaryKey.FilterByMarket)}/>
            <Multiselect name={translate(EDictionaryKey.Market)} value={zoneFilter}
                         handleChange={handleChangeZoneFilter}
                         options={formatZoneList}
                         paperTitle={translate(EDictionaryKey.FilterByMarket)}/>
            <Multiselect name={translate(EDictionaryKey.Category)} value={categoryFilter}
                         handleChange={handleChangeCategoryFilter}
                         options={formatCategoriesList}
                         paperTitle={translate(EDictionaryKey.FilterByCategory)}/>
            <Multiselect name={translate(EDictionaryKey.Brand)} value={brandFilter}
                         handleChange={handleChangeBrandFilter}
                         options={formatBrandsList}
                         paperTitle={translate(EDictionaryKey.FilterByBrand)}/>
        </Container>
    )
}