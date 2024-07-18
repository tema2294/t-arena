import {IPrice} from "redux-store/api";

export const getPriceUniqueKey = (price: Pick<IPrice, 'id'> & Pick<IPrice, 'deliveryPriceId'>) => `${price.id}${price.deliveryPriceId}`