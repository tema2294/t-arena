import {TLSItem, TLSReturnValue} from "./local-storage.types";
import {isValueDefined} from "tools/is-value-defined";

export const constructLSItem = (storageItemKey: string): TLSItem => {
    const {localStorage} = globalThis || window;

    return {
        setItemData: (itemData: string): void => localStorage.setItem(storageItemKey, itemData),
        getItemData: <DefaultItemType>(defaultItemData?: DefaultItemType): TLSReturnValue<DefaultItemType> =>
            localStorage.getItem(storageItemKey) || (defaultItemData as unknown as TLSReturnValue<DefaultItemType>),
        getIsValueDefined: (): boolean => isValueDefined(localStorage.getItem(storageItemKey)),
        removeItemData: (): void => localStorage.removeItem(storageItemKey),
    };
};
