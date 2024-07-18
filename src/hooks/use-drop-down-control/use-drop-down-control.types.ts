import {MouseEvent} from "react";

export interface IDropdownControlObject {
    anchorEl: null | HTMLElement,
    handleClick: (event: MouseEvent<HTMLElement>) => void,
    handleClose: (event: MouseEvent<HTMLElement>) => void,
    isOpen: boolean
}

export type TUseDropdownControl = () => IDropdownControlObject