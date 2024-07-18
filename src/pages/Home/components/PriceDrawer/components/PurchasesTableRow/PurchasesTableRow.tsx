import {Typography} from "@mui/material";
import {CURRENCY_SYMBOL, ECurrency} from "constants/index";
import {usePriceInCurrency} from "hooks/use-price-in-currency";
import React, {FC} from "react";
import {getFormatDeliveryDate} from "tools/get-format-delivery-date";
import {getFormatPrice} from "tools/get-format-price";
import {AdditionalCell, Cell, CELLS_CSS, LastCell} from "../Cell";
import {Row} from "../Row";
import {getSpecsCellValues} from "../tools";
import {IPurchasesTableRow} from "./PurchasesTableRow.types";


export const PurchasesTableRow: FC<IPurchasesTableRow> = ({
                                                              quantity = 0,
                                                              price, zone, deliveryDate, unusedSpecLines
                                                          }) => {
    const {zoneName} = zone || {};

    const {symbol, formatPrice: formatPriceInCurrency} = usePriceInCurrency(price);
    const formatPrice = getFormatPrice(price, ECurrency.USD);
    const formatDeliveryDate = getFormatDeliveryDate(deliveryDate);
    const {mainSpecsString, additionalSpec} = getSpecsCellValues(unusedSpecLines)

    return (
        <Row isActive={false}>
            <Cell style={CELLS_CSS[0]}>
                <Typography variant={'body500'}>
                    {zoneName}
                </Typography>
                <Typography variant={'caption'}>
                    {formatDeliveryDate}
                </Typography>
            </Cell>
            <Cell style={CELLS_CSS[1]}>
                <Typography variant={'body500'}>
                    {mainSpecsString}
                </Typography>
                <Typography variant={'caption'}>
                    {additionalSpec}
                </Typography>
            </Cell>
            <AdditionalCell style={CELLS_CSS[2]}>
                <Typography variant={'body500'}>
                    {quantity}
                </Typography>
            </AdditionalCell>
            <AdditionalCell style={CELLS_CSS[3]}>
                <Typography variant={'body500'}>
                    {`${formatPrice} ${CURRENCY_SYMBOL['USD']}`}
                </Typography>
                <Typography variant={'caption'}>
                    {`~ ${formatPriceInCurrency} ${symbol}`}
                </Typography>
            </AdditionalCell>
            <LastCell style={CELLS_CSS[4]}>
            </LastCell>
        </Row>
    )
};