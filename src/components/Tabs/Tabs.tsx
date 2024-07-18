import {Typography} from "@mui/material";
import {Icon} from "components/Icon";
import React, {FC} from "react";
import {CustomLabelContainer, CustomTab, TabsContainer} from "./Tabs.styles";
import {ITabsProps} from "./Tabs.types";


const CustomTabContent = ({label, isActive}: any) => (
    <CustomLabelContainer>
        <Typography variant={'body1'}>{label}</Typography>
        {isActive && <Icon name={'TabUnderline'}/>}
    </CustomLabelContainer>
);

export const Tabs: FC<ITabsProps> = ({value, onChange, options}) => {
    const handleChange = (event: React.SyntheticEvent, nextValueKey: string) => {
        onChange(options[nextValueKey]);
    };

    return (
        <TabsContainer value={value} onChange={handleChange}>
            {Object.values(options).map((tabProps, index) => {
                const {label, value: tabId} = tabProps;
                const isActive = tabId === value;

                return (
                    <CustomTab disableRipple={true} value={tabId}
                               label={<CustomTabContent isActive={isActive} label={label}/>} key={index}/>
                )
            })
            }
        </TabsContainer>
    )
}