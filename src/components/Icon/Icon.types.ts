import {MouseEvent} from "react";
import type {iconNames} from './iconNames';

export type TIconName = keyof typeof iconNames;

export interface IIconComponentProps {
    name: TIconName;
    className?: string;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    activeCursor?: boolean
    color?: string
}
