import {ISelectOption} from "redux-store/api";

export interface ISelectParams {
    activeColors: {
        icon: string,
        text: string,
        shevron: string,
        background: string,
    },
    defaultColor: {
        icon: string,
        text: string,
        shevron: string,
        background: string,
    },
    hoverColor: {
        icon: string,
        text: string,
        shevron: string,
        background: string,
    }
}

export interface ISelectProps {
    options: ISelectOption[],
    name?: string
    value: ISelectOption,
    handleChange: (nextValue: ISelectOption) => void;
    children?: JSX.Element,
    hasIcon?: boolean
    hasPadding?: boolean,
    className?: string
    isHoverMode?: boolean,
    isFilledMode?: boolean
}
