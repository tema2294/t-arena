import {ILocalizationContext} from "./Localization.types";

export enum ELanguage {
    Eng = 'Eng',
    Ru = 'Ru'
}

export const LANGUAGE_NAME: Record<ELanguage, string> = {
    [ELanguage.Ru]: 'Russian',
    [ELanguage.Eng]: 'English',
}

export const NAVIGATOR_LANGUAGE_FORMAT: Record<string, ELanguage> = {
    en: ELanguage.Eng,
    'en-US': ELanguage.Eng,
    ru: ELanguage.Ru
}

export const DEFAULT_CONTEXT_VALUE = {language: ELanguage.Ru} as ILocalizationContext;
