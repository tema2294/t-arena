import {Dispatch, SetStateAction} from "react";

export interface ITabsProps {
    options: ITabOption[],
    value?: ITabOption,
    onChange: Dispatch<SetStateAction<ITabOption>>
}

export interface ITabOption {
    id: string,
    name: string
}