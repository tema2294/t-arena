import {IMaskData} from "../../redux-store/api";
import {getParsedMask} from './get-parsed-mask';

describe('getParsedMask', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should parse the mask and return the correct mask data', () => {
        const mask = '{brand_name} {product_name} {memory_value} {color_value}';
        const reservedMaskFields = {
            '{brand_name}': 'Apple',
            '{product_name}': 'iPhone',
        };
        const expected: IMaskData[] = [
            {maskField: 'memory', maskMode: 'value', originalFieldKey: '{memory_value}'},
            {maskField: 'color', maskMode: 'value', originalFieldKey: '{color_value}'}
        ];

        const result = getParsedMask(mask, reservedMaskFields);
        expect(result).toEqual(expected);
    });

    it('should handle mask with only reserved fields', () => {
        const mask = '{brand_name} {product_name}';
        const reservedMaskFields = {
            '{brand_name}': 'Apple',
            '{product_name}': 'iPhone',
        };
        const expected: IMaskData[] = [];

        const result = getParsedMask(mask, reservedMaskFields);
        expect(result).toEqual(expected);
    });

    it('should handle mask with no fields', () => {
        const mask = '';
        const reservedMaskFields = {};
        const expected: IMaskData[] = [];

        const result = getParsedMask(mask, reservedMaskFields);
        expect(result).toEqual(expected);
    });

    it('should handle mask with different modes', () => {
        const mask = '{brand_name} {memory_value} {memory_name}';
        const reservedMaskFields = {
            '{brand_name}': 'Apple',
        };
        const expected: IMaskData[] = [
            {maskField: 'memory', maskMode: 'value', originalFieldKey: '{memory_value}'},
            {maskField: 'memory', maskMode: 'name', originalFieldKey: '{memory_name}'}
        ];

        const result = getParsedMask(mask, reservedMaskFields);
        expect(result).toEqual(expected);
    });

    it('should handle mask with non-reserved fields only', () => {
        const mask = '{memory_value} {color_name}';
        const reservedMaskFields = {};
        const expected: IMaskData[] = [
            {maskField: 'memory', maskMode: 'value', originalFieldKey: '{memory_value}'},
            {maskField: 'color', maskMode: 'name', originalFieldKey: '{color_name}'}
        ];

        const result = getParsedMask(mask, reservedMaskFields);
        expect(result).toEqual(expected);
    });
});
