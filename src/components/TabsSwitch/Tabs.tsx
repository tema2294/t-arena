import React, {FC} from "react";
import {TabOption, TabsContainer} from "./Tabs.styles";
import {ITabsProps} from "./Tabs.types";

export const Tabs: FC<ITabsProps> = (props) => {
    const {onChange, options = [], value} = props;

    return (
        <TabsContainer>
            {options.map((optionData) => {
                const {id, name} = optionData;
                const selected = value?.id === id;
                const handleClick = () => {
                    onChange(optionData)
                };

                return (
                    <TabOption key={id} variant={'body2'} onClick={handleClick} selected={selected}>{name}</TabOption>)
            })}
        </TabsContainer>
    )
}