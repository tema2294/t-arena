import {TIntermediateTableData} from "redux-store/api";

export const getReservedMaskFields = (item: TIntermediateTableData) => ({
    '{product_name}': item.product?.productName || '',
    '{brand_name}': item.product?.brand?.brandName || '',
});

export const DEFAULT_MASK = '{brand_name} {product_name} {memory_value} ({Color_value})';
