import {CURRENCY_SYMBOL, ECurrency} from "constants/index";
import {useMemo} from "react";
import {useGetCurrenciesQuery} from "redux-store/api";
import {selectCurrency} from "redux-store/appState";
import {useAppSelector} from "redux-store/hooks";
import {getFormatPrice} from "tools/get-format-price";

export const usePriceInCurrency = (price: number, currency?: ECurrency): {
    formatPrice: string,
    symbol: string,
    currentCurrency: ECurrency,
    currencyRatio: number
} => {
    const {data: currencyData} = useGetCurrenciesQuery();
    const currentCurrency = currency || useAppSelector(selectCurrency) as ECurrency;
    const currencySymbol = CURRENCY_SYMBOL[currentCurrency] || CURRENCY_SYMBOL[ECurrency.USD];

    return useMemo(() => {
        const currencyRatio = (currencyData || {})[currentCurrency] || 1;
        const priceWithRatio = currencyRatio * price;
        const formatPrice = getFormatPrice(priceWithRatio, currentCurrency);

        return {formatPrice, symbol: currencySymbol, currencyRatio, currentCurrency};
    }, [currentCurrency, price, currencyData])
}