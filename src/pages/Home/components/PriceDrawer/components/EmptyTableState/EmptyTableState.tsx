import {Typography} from "@mui/material";
import {Icon} from "components/Icon";
import React, {FC, PropsWithChildren} from "react";
import {EmptyTableContainer} from "../Cell";

export const EmptyTableState: FC<PropsWithChildren> = ({children}) => {

    return <EmptyTableContainer>
        <Icon name={'Container24'} color={'var(--accent-color)'}/>
        <Typography variant={'body14_400'}>
            {children}
        </Typography>
    </EmptyTableContainer>
}