import React, {createContext, FC, PropsWithChildren, useMemo, useState} from "react";
import {DEFAULT_CONTEXT_VALUE, ELanguage} from "./Localization.constants";
import {constructLSItem} from "tools/local-storage";
import {LOCAL_STORAGE_KEYS} from "constants/localStorageKeys";
import {getSystemLanguage} from "./Localization.utils";
import useEffectAfterFirstRender from "hooks/use-effect-after-first-render";

export const LocalizationContext = createContext(DEFAULT_CONTEXT_VALUE);

export const LocalizationProvider: FC<PropsWithChildren> = ({children}) => {
    const {getItemData, setItemData, removeItemData} = constructLSItem(LOCAL_STORAGE_KEYS.language)
    const initialLanguage = useMemo(() => (getItemData(getSystemLanguage())) as ELanguage, []);
    const [language, setLanguage] = useState(initialLanguage);
    
    useEffectAfterFirstRender(() => {
        setItemData(language);
    }, [language])

    return (
        <LocalizationContext.Provider value={{language, setLanguage}}>
            {children}
        </LocalizationContext.Provider>
    )
}