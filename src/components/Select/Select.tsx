import {Typography} from "@mui/material";
import {Icon} from "components/Icon";
import {useDropdownControl} from "hooks/use-drop-down-control";
import {FC, MouseEvent} from "react";
import {DropdownIcon, ListContainer, MenuItem, SelectContainer, SelectMenu} from "./Select.styles";
import {ISelectProps} from "./Select.types";


export const Select: FC<ISelectProps> = (props) => {
    const {
        name,
        isHoverMode,
        isFilledMode,
        children,
        hasIcon = true,
        hasPadding = true,
        options,
        value,
        handleChange,
        className,
    } = props;
    const {handleClick, isOpen, handleClose, anchorEl} = useDropdownControl();
    const {id: valueId = ''} = value || {};

    const hasCustomName = !!children;

    return (
        <SelectContainer open={isOpen} hoverMode={isHoverMode} filled={isFilledMode} className={className}
                         hasPadding={hasPadding}
                         onClick={handleClick}>
            {hasCustomName ? children : <Typography variant={'body500'}>
                {name}
            </Typography>}
            {hasIcon && <DropdownIcon open={isOpen} name={'Chevron'}/>}
            <SelectMenu open={isOpen} anchorEl={anchorEl} onClose={handleClose} autoFocus={false}>
                <ListContainer>
                    {options.map((optionData) => {
                        const {id} = optionData;
                        const isSelected = valueId === id;

                        const onItemClick = (event: MouseEvent<HTMLElement>): void => {
                            handleChange(optionData);
                            handleClose(event);
                        };

                        return <MenuItem key={id} variant={'body500'} onClick={onItemClick}>
                            {optionData?.name}
                            {isSelected && <Icon name={'Check'}/>}
                        </MenuItem>
                    })}
                </ListContainer>
            </SelectMenu>
        </SelectContainer>
    )
}