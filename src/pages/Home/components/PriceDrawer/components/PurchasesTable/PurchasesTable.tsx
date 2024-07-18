import {useFilteredDataFromContext} from "hocs/FilterDataContext";
import {EDictionaryKey, useTranslation} from "hocs/Localization";
import React from "react";
import {TTableData} from "redux-store/api";
import {selectPriceDrawerItemName} from "redux-store/appState";
import {useAppSelector} from "redux-store/hooks";
import {getPriceUniqueKey} from "tools/get-price-unique-key";
import {FilterBar, TableContainer, TableHeader, TableWrapper} from "../Cell";
import {EmptyTableState} from "../EmptyTableState";
import {HeaderRow} from "../HeaderRow";
import {PurchasesTableRow} from "../PurchasesTableRow";

export const PurchasesTable = () => {
    const {translate} = useTranslation();
    const {filteredData} = useFilteredDataFromContext()
    const priceDrawerItemName = useAppSelector(selectPriceDrawerItemName);
    const skuData = filteredData[priceDrawerItemName] || {};

    const {orderList = []} = skuData || {} as TTableData;

    const hasOrders = orderList.length > 0;


    return (
        <TableWrapper>
            <FilterBar>
                <TableHeader>
                    {translate(EDictionaryKey.Purchases)}
                </TableHeader>
            </FilterBar>
            {hasOrders && <TableContainer>
                <HeaderRow/>
                {hasOrders && orderList.map(({
                                                 lineQuantity,
                                                 deliveryDate,
                                                 zone,
                                                 linePrice,
                                                 deliveryPriceValue, id,
                                                 unusedSpecLines
                                             }, index) =>
                    <PurchasesTableRow key={getPriceUniqueKey({id, deliveryPriceId: deliveryPriceValue})}
                                       quantity={lineQuantity}
                                       zone={zone}
                                       deliveryDate={deliveryDate}
                                       price={linePrice}
                                       unusedSpecLines={unusedSpecLines}
                    />)}
            </TableContainer>}
            {!hasOrders && <EmptyTableState>
                {translate(EDictionaryKey.NoPurchasesYet)}
            </EmptyTableState>}
        </TableWrapper>
    )
}