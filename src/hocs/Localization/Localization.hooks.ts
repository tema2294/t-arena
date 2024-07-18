import {useCallback, useContext} from "react";
import {LocalizationContext} from "./Localization.provider";
import {EDictionaryKey, TRANSLATIONS_DICTIONARY} from "./Localization.dictionary";

export const useLocalization = () => useContext(LocalizationContext);

export const useTranslation = () => {
    const {language} = useLocalization();

    const translate = useCallback((key: EDictionaryKey) => {
        return TRANSLATIONS_DICTIONARY[language][key];
    }, [language]);

    return {translate};
};