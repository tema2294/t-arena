import {ELanguage, NAVIGATOR_LANGUAGE_FORMAT} from "./Localization.constants";

export const getSystemLanguage = () => NAVIGATOR_LANGUAGE_FORMAT[navigator?.language || ''] || ELanguage.Eng

