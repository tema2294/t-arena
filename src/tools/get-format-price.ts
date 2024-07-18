import {ECurrency} from "constants/index";

const CURRENCY_FRACTION_DIGITS: Record<ECurrency, number> = {
    [ECurrency.RUB]: 0,
    [ECurrency.USD]: 2,
    [ECurrency.USDT]: 2,
}
export const getFormatPrice = (price: number, currency: ECurrency) => {
    return (price || 0).toLocaleString('en-US', {maximumFractionDigits: CURRENCY_FRACTION_DIGITS[currency]})
};

