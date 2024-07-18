export interface ITabOption {
    label: string,
    value: number | string
}

export interface ITabsProps {
    onChange: (nextTab: ITabOption) => void;
    value: ITabOption['value'],
    options: Record<string, ITabOption>
}