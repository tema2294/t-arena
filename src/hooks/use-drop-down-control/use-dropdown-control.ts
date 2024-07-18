import {MouseEvent, useState} from "react";
import {TUseDropdownControl} from "./use-drop-down-control.types";

export const useDropdownControl: TUseDropdownControl = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isOpen = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(null);
        event.stopPropagation();
    };

    return {
        anchorEl,
        handleClick,
        handleClose,
        isOpen
    }
}