import {IMaskData} from "redux-store/api";
import {snakeToCamel} from "../snake-to-camel-case";

export const getParsedMask = (mask: string, reservedMaskFields: Record<string, string>): IMaskData[] => {
    // Регулярное выражение для поиска содержимого внутри фигурных скобок
    const regex = /\{([^}]+)\}/g;

    // Использование match для нахождения всех совпадений
    const matches = mask.match(regex) || [];

    const result = matches.reduce((acc, originalFieldKey) => {
        // последний элемент это модификатор value или name, все что до неё - название сущности
        const splitMaskField = originalFieldKey.slice(1, -1).split('_');
        const maskMode = splitMaskField[splitMaskField.length - 1];
        const maskField = snakeToCamel(splitMaskField.slice(0, -1).join('_'))

        if (!reservedMaskFields[originalFieldKey]) {
            acc.push({maskField, maskMode, originalFieldKey});
        }

        return acc;
    }, [] as IMaskData[]);

    return result;
}