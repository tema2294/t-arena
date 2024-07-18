import {TIconName} from "components/Icon";

export interface IEmptyStatusProps {
    iconName: TIconName,
    title: string,
    subtitleFunction: (searchQuery: string) => string
}