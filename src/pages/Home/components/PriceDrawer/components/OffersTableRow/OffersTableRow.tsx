import {Typography} from "@mui/material";
import {Icon} from "components/Icon";
import {CURRENCY_SYMBOL, ECurrency} from "constants/index";
import {usePriceInCurrency} from "hooks/use-price-in-currency";
import React, {FC} from "react";
import {setOrderModal} from "redux-store/appState";
import {useAppDispatch} from "redux-store/hooks";
import {getFormatDeliveryDate} from "tools/get-format-delivery-date";
import {getFormatPrice} from "tools/get-format-price";
import {AdditionalCell, Cell, CELLS_CSS, LastCell} from "../Cell";
import {Row} from "../Row";
import {getSpecsCellValues} from "../tools";
import {IOffersTableRow} from "./OffersTableRow.types";


export const OffersTableRow: FC<IOffersTableRow> = ({
                                                        priceData,
                                                        formedItemName,
                                                    }) => {
    const {clientPrice, minQuantity, id, availableQuantity, zone, deliveryDate, unusedSpecLines} = priceData;
    const {zoneName} = zone || {};
    const dispatch = useAppDispatch();


    const {symbol, formatPrice: formatPriceInCurrency} = usePriceInCurrency(clientPrice);
    const formatPrice = getFormatPrice(clientPrice, ECurrency.USD);
    const formatDeliveryDate = getFormatDeliveryDate(deliveryDate);
    const {mainSpecsString, additionalSpec} = getSpecsCellValues(unusedSpecLines)
    const handleOpenOrderModal = () => {
        dispatch(setOrderModal({...priceData, formedItemName}))
    };

    return (
        <Row isActive={true} onClick={handleOpenOrderModal} key={id}>
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
                    {availableQuantity}
                </Typography>
                <Typography variant={'caption'}>
                    {`min ${minQuantity}`}
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
                <Icon name={'ArrowRight'}/>
            </LastCell>
        </Row>
    )
};