export const snakeToCamel = (str: string, capitalizeFirst: boolean = false): string => {
    let camelStr = str.toLowerCase().replace(/([-_][a-z])/g, group =>
        group
            .toUpperCase()
            .replace('-', '')
            .replace('_', '')
    );

    return camelStr;
};

export const formatDeepSnakeObjKeysToCamelCase = <GResult>(node: unknown): GResult => {

    const isNodeArray = Array.isArray(node);

    if (isNodeArray) {
        return node.map(item => formatDeepSnakeObjKeysToCamelCase(item)) as GResult;
    }

    const isObject = typeof node === 'object' && node !== null;

    if (isObject) {
        return Object.entries(node).reduce(
            (camelCaseObj, [key, value]) => ({
                ...camelCaseObj,
                [snakeToCamel(key)]: formatDeepSnakeObjKeysToCamelCase(value),
            }),
            {},
        ) as GResult;
    }

    return node as GResult;
};
