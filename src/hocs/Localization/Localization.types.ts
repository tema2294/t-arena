import type {ELanguage} from "./Localization.constants";
import {EDictionaryKey} from "./Localization.dictionary";

export interface ILocalizationContext {
    language: ELanguage
    setLanguage: (nextLanguage: ELanguage) => void;
}

export type TTranslationsDictionary = Record<ELanguage, Record<EDictionaryKey, string>>