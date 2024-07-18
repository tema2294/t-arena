import {ELanguage} from "hocs/Localization";

export const ENG_TITLES_LIST = [
    'Market',
    'Spec',
    'Qty',
    'Price'
];
export const RU_TITLES_LIST = [
    'Произв.',
    'Хар.',
    'Колл.',
    'Цена'
];

export const TITLES_OBJECT = {
    [ELanguage.Eng]: ENG_TITLES_LIST,
    [ELanguage.Ru]: RU_TITLES_LIST,
}