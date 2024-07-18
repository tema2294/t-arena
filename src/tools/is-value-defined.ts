export const isValueDefined = <GValue>(value: GValue): boolean => {
    const isValueEmpty = !value || value === 'null' || value === 'undefined';
    
    return !isValueEmpty;
}