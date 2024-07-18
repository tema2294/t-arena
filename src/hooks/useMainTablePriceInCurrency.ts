import {usePriceInCurrency} from "hooks/use-price-in-currency";
import {selectMainTableCurrency} from "redux-store/appState";
import {useAppSelector} from "redux-store/hooks";

export const useMainTablePriceInCurrency = (price: number) => {
    const mainTableCurrency = useAppSelector(selectMainTableCurrency);

    return usePriceInCurrency(price, mainTableCurrency);
}