import {IPrice} from "redux-store/api";

export const getSortingPrices = <GItem extends IPrice>(prices: GItem[]): GItem[] => [...prices].sort((price, nextPrice) => price.clientPrice - nextPrice.clientPrice)