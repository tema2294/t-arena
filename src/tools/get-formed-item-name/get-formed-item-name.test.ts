import {ISkuProduct, ISkuSpecLines, TIntermediateTableData} from "../../redux-store/api";
import {DEFAULT_MASK} from "../get-parsed-mask";
import {getFormedItemName} from './get-formed-item-name';

describe('getFormedItemName', () => {

    const product: ISkuProduct = {
        id: 12,
        productName: 'iPhone',
        brand: {brandName: 'Apple', id: 1},
        category: {mask: DEFAULT_MASK, id: 2, categoryName: 'qweqw'},
    };

    const specLines: Record<string, ISkuSpecLines> = {
        memory: {id: 1, specName: 'Memory', value: '64GB', specSlug: 'memory'},
        color: {id: 2, specName: 'Color', value: 'Black', specSlug: 'color'},
    };

    const itemWithSkuName: any = {
        product,
        specLines,
        skuName: 'Custom SKU Name',
        prices: []
    };

    const itemWithoutSkuName: TIntermediateTableData = {
        id: 123,
        product,
        specLines,
        prices: []
    };

    it('should return the existing SKU name if present', () => {
        const result = getFormedItemName(itemWithSkuName);
        expect(result.formedItemName).toBe('Custom SKU Name');
        expect(result.unusedSpecLines).toEqual(specLines);
    });

    it('should form item name based on mask when SKU name is not present', () => {
        const result = getFormedItemName(itemWithoutSkuName);
        expect(result.formedItemName).toBe('Apple iPhone 64GB (Black)');
        expect(result.unusedSpecLines).toEqual({});
    });

    it('should handle missing spec lines gracefully', () => {
        const incompleteSpecLines = {
            memory: {id: 1, specName: 'Memory', value: '64GB', specSlug: 'memory'}
        };
        const itemWithMissingSpecLines: TIntermediateTableData = {
            id: 1,
            product,
            specLines: incompleteSpecLines,
            prices: []
        };

        const result = getFormedItemName(itemWithMissingSpecLines);
        expect(result.formedItemName).toBe('Apple iPhone 64GB ');
        expect(result.unusedSpecLines).toEqual({});
    });

    it('should use default mask if product category mask is not present', () => {
        const productWithoutMask = {...product, category: {...product.category, mask: ''}};
        const itemWithoutCategoryMask: TIntermediateTableData = {
            id: 1,
            product: productWithoutMask,
            specLines,
            prices: []
        };

        const result = getFormedItemName(itemWithoutCategoryMask);
        expect(result.formedItemName).toBe('Apple iPhone 64GB (Black)');
        expect(result.unusedSpecLines).toEqual({});
    });
});
