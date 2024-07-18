import {MultiselectMenuItem, OptionCheckbox} from "./MenuItem.styles";
import {Typography} from "@mui/material";
import {FC} from "react";
import {IMenuItemProps} from "./MenuItem.types";

export const MenuItem: FC<IMenuItemProps> = ({optionData, value, handleChange}) => {
    const {id, name} = optionData;
    const isChecked = !!value[id];
    const handleClickItem = () => {
        const nextCheckboxValue = !isChecked;
        const nextValue = {...value};

        if (nextCheckboxValue) {
            nextValue[id] = optionData;
        } else {
            delete nextValue[id]
        }

        handleChange(nextValue);
    };

    return (
        <MultiselectMenuItem onClick={handleClickItem} key={id}>
            <OptionCheckbox size={'small'} checked={isChecked}/>
            <Typography variant={'body500'}>
                {name}
            </Typography>
        </MultiselectMenuItem>
    )
}