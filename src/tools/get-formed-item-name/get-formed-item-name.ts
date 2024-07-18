import {ISkuSpecLines, TIntermediateTableData} from "redux-store/api";
import {DEFAULT_MASK, getParsedMask, getReservedMaskFields} from "../get-parsed-mask";

export const getFormedItemName = (item: TIntermediateTableData): {
    formedItemName: string,
    unusedSpecLines: Record<string, ISkuSpecLines>
} => {
    const {specLines, product, skuName = ''} = item;

    const hasItemName = !!skuName;

    if (hasItemName) return {formedItemName: skuName, unusedSpecLines: specLines};

    const itemMask = product?.category?.mask || DEFAULT_MASK;
    const reservedMaskFields = getReservedMaskFields(item);
    const maskFieldList = getParsedMask(itemMask, reservedMaskFields);

    const maskFieldValues: Record<string, string> = {...reservedMaskFields};
    const usedSpecLines: Record<string, boolean> = {};
    const unusedSpecLines: Record<string, ISkuSpecLines> = {...specLines};


    maskFieldList.forEach(({maskField, maskMode, originalFieldKey}) => {
        const isFieldNameMode = maskMode === 'name';
        const {specName: specNameFieldName = '', value: specFieldValue = '', specSlug} = specLines[maskField] || {};

        maskFieldValues[originalFieldKey] = isFieldNameMode ? specNameFieldName : specFieldValue;

        usedSpecLines[specSlug] = true;
    })


    Object.keys(usedSpecLines).forEach((specSlug) => delete unusedSpecLines[specSlug])

    const formedItemName = itemMask.replace(/{\w+}/g, (match: string) => {
        const maskValue = maskFieldValues[match];

        //
        // const hasValue = !!maskValue;
        // if (!hasValue) {
        //     console.warn(`Элемент ${item.skuName} не имеет внутри specLines значения ${match}`)
        // }

        return maskValue || '';
    }).replaceAll('()', '')


    return {formedItemName, unusedSpecLines}
}
