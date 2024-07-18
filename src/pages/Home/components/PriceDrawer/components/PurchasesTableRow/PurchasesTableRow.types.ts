import {ISkuSpecLines, IZone} from "redux-store/api";

export interface IPurchasesTableRow {
    quantity: number,
    price: number,
    zone: IZone,
    deliveryDate: string,
    unusedSpecLines?: Record<string, ISkuSpecLines>
}