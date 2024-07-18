export const getAssociativeObject = <T>(array: Array<T>, fieldKey: keyof T): Record<string, T> => {
    const isArrayEmpty = array.length === 0;
    if (isArrayEmpty) return {};

    const result: { [key: string]: T } = {};
    for (const element of array) {
        const key = `${element[fieldKey]}`;
        result[key] = element;
    }

    return result;
};
