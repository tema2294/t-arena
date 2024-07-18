export type TLSReturnValue<T> = T extends string ? string : string | null;

export type TLSItem = {
    setItemData: (itemData: string) => void;
    getItemData: <DefaultItemType>(defaultItemData?: DefaultItemType) => TLSReturnValue<DefaultItemType>;
    removeItemData: () => void;
    getIsValueDefined: () => boolean
};
