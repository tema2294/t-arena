import {Typography} from "@mui/material";
import {Badge} from "components/Badge";
import {RowContainer} from "components/Table";
import {useMainTablePriceInCurrency} from "hooks/useMainTablePriceInCurrency";
import {setPriceDrawerItemName} from "redux-store/appState";
import {useAppDispatch} from "redux-store/hooks";
import {ChipsCell, CurrencyCell, CurrencyTypography, NameCell} from "../Cell";
import {COLUMN_WIDTHS} from "../DataTable/DataTable.constants";
import {IRowProps} from "./Row.types";

export const Row = ({data}: IRowProps) => {
    const {prices = [], formedItemName, ordersSummaryCount} = data;
    const {clientPrice, specLines} = prices[0] || {};
    const dispatch = useAppDispatch();

    const {country} = specLines;
    const countrySpecValue = country?.value || '';

    const {symbol, formatPrice} = useMainTablePriceInCurrency(clientPrice);

    const handleRowClick = (): void => {
        dispatch(setPriceDrawerItemName(formedItemName));
    }

    const hasOrders = !!ordersSummaryCount;

    return (
        <RowContainer onClick={handleRowClick}>
            <NameCell width={COLUMN_WIDTHS[0]}>
                <Typography variant={'body500'} style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>
                    {formedItemName}
                </Typography>
            </NameCell>
            <ChipsCell width={COLUMN_WIDTHS[1]}>
                {hasOrders && <Badge>
                    {ordersSummaryCount}
                </Badge>}
            </ChipsCell>
            <CurrencyCell right={'true'} width={COLUMN_WIDTHS[2]}>
                <Typography variant={'body14_400'}>
                    {`${formatPrice} ${symbol}`}
                </Typography>
                <CurrencyTypography variant={'caption'}>
                    {countrySpecValue}
                </CurrencyTypography>
            </CurrencyCell>
        </RowContainer>
    );
}
