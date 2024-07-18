import {IMultiSelectOption} from "redux-store/api";

export interface IMultiselectProps {
    name: string,
    paperTitle: string,
    options: IMultiSelectOption[];
    value: Record<string, IMultiSelectOption>,
    handleChange: (nextValue: Record<string, IMultiSelectOption>) => void;
}