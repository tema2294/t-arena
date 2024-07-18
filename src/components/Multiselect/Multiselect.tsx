import {Typography} from "@mui/material";
import {useDropdownControl} from "hooks/use-drop-down-control";
import {FC, MouseEvent} from "react";
import {MenuItem} from "./components";
import {
    Badge,
    DropdownIcon,
    ListContainer,
    ListTitle,
    MultiselectMenu,
    ResetButton,
    SelectContainer
} from "./Multiselect.styles";
import {IMultiselectProps} from "./Multiselect.types";

export const Multiselect: FC<IMultiselectProps> = (props) => {
    const {name, paperTitle, options, value, handleChange} = props;

    const valueLength = Object.keys(value || {}).length;
    const isActive = valueLength > 0;
    const {handleClick, isOpen, handleClose, anchorEl} = useDropdownControl();
    const hasChevron = !isActive;

    const resetState = (event: MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        handleChange({})
    };

    return (
        <SelectContainer onClick={handleClick} open={isOpen}>
            <Typography variant={'body1'}>
                {name}
            </Typography>
            {isActive && <Badge open={isOpen}>{valueLength}</Badge>}
            {hasChevron && <DropdownIcon open={isOpen} name={'Chevron'}/>}
            {isActive && <ResetButton activeCursor={true} onClick={resetState} name={'Cross'}/>}
            <MultiselectMenu open={isOpen} anchorEl={anchorEl} onClose={handleClose} autoFocus={false}>
                <ListTitle variant={'body1'}>
                    {paperTitle}
                </ListTitle>
                <ListContainer>
                    {options.map((optionData) => <MenuItem key={optionData.id} optionData={optionData}
                                                           handleChange={handleChange}
                                                           value={value}/>)}
                </ListContainer>
            </MultiselectMenu>
        </SelectContainer>
    )
}