import {useFilteredDataFromContext} from "hocs/FilterDataContext";
import {EDictionaryKey, useTranslation} from "hocs/Localization";
import React, {FC} from "react";
import {selectPriceDrawerItemName} from "redux-store/appState";
import {useAppSelector} from "redux-store/hooks";
import {getPriceUniqueKey} from "tools/get-price-unique-key";
import {FilterBar, FilterContainer, TableContainer, TableHeader, TableWrapper} from "../Cell";
import {EmptyTableState} from "../EmptyTableState";
import {HeaderRow} from "../HeaderRow";
import {OffersTableRow} from "../OffersTableRow";

export const OffersTable: FC = () => {
    const {translate} = useTranslation();
    const {filteredData} = useFilteredDataFromContext()
    const priceDrawerItemName = useAppSelector(selectPriceDrawerItemName);
    const skuData = filteredData[priceDrawerItemName] || {};

    const {prices = [], formedItemName = ''} = skuData || {};
    const hasPrices = prices.length > 0;

    return <TableWrapper>
        <FilterBar>
            <TableHeader>
                {translate(EDictionaryKey.Offers)}
            </TableHeader>
            <FilterContainer>

            </FilterContainer>
        </FilterBar>

        {hasPrices && <TableContainer>
            <HeaderRow/>
            {prices.map((priceData) => <OffersTableRow key={getPriceUniqueKey(priceData)}
                                                       priceData={priceData} formedItemName={formedItemName}/>)}
        </TableContainer>}
        {!hasPrices && <EmptyTableState>
            {translate(EDictionaryKey.NoPricesYet)}
        </EmptyTableState>}
    </TableWrapper>
};