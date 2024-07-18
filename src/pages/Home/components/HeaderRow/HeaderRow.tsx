import {Typography} from "@mui/material";
import {Icon} from "components/Icon/index";
import {createOption} from "components/Select";
import {RowContainer} from "components/Table";
import {CURRENCY_SYMBOL, ECurrency} from "constants/index";
import {EDictionaryKey, useTranslation} from "hocs/Localization";
import {ISelectOption} from "redux-store/api";
import {selectMainTableCurrency, setMainTableCurrency} from "redux-store/appState";
import {useAppDispatch, useAppSelector} from "redux-store/hooks";
import {ChipsCell, CurrencyCell, CurrencySelect, NameCell} from "../Cell";
import {COLUMN_WIDTHS} from "../DataTable/DataTable.constants";

export const HeaderRow = () => {
    const {translate} = useTranslation();
    const currentCurrency = useAppSelector(selectMainTableCurrency);
    const dispatch = useAppDispatch();

    const currencySelectValue = createOption(currentCurrency, currentCurrency)
    const currencyOptions = [ECurrency.RUB, ECurrency.USD].map((currencyId) => createOption(currencyId, `${currencyId}, ${CURRENCY_SYMBOL[currencyId]}`));
    const handleChangeCurrency = (nextCurrency: ISelectOption): void => {
        const {id: nextCurrencyId} = nextCurrency || {};
        dispatch(setMainTableCurrency(nextCurrencyId as ECurrency))
    };

    return (
        <RowContainer>
            <NameCell width={COLUMN_WIDTHS[0]}>
                <Typography variant={'caption'}>
                    {translate(EDictionaryKey.Product)}
                </Typography>
            </NameCell>
            <ChipsCell width={COLUMN_WIDTHS[1]}/>
            <CurrencyCell right={'true'} width={COLUMN_WIDTHS[2]}>
                <Typography variant={'caption'}>
                    {translate(EDictionaryKey.MinPrice)}
                </Typography>
                <CurrencySelect hasPadding={false} hasIcon={false} handleChange={handleChangeCurrency}
                                options={currencyOptions}
                                value={currencySelectValue}
                >
                    <Icon activeCursor name={'Settings'}/>
                </CurrencySelect>
            </CurrencyCell>
        </RowContainer>
    );
}