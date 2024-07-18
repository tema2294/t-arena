import {IMultiselectProps} from "../../Multiselect.types";
import {IMultiSelectOption} from "redux-store/api";

export interface IMenuItemProps {
    optionData: IMultiSelectOption,
    value: IMultiselectProps['value'],
    handleChange: IMultiselectProps['handleChange']
}