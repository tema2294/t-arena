import {Typography} from "@mui/material";
import {Select} from "components/Select";
import {EDictionaryKey, useTranslation} from "hocs/Localization";
import React from "react";
import {OrdersTable} from "./components";
import {OrdersPage, PageHeaderContainer} from "./Orders.styles";

export const Orders = () => {
    const {translate} = useTranslation();

    return (
        <OrdersPage>
            <PageHeaderContainer>
                <Typography variant={'h1'}>
                    {translate(EDictionaryKey.Orders)}
                </Typography>
                <Select isFilledMode={true} isHoverMode={true} value={{id: 1, name: 'Market'}} name={'Market'}
                        handleChange={() => console.log('')}
                        options={[{id: 1, name: 'Market'}, {id: 2, name: 'default'}]}/>
            </PageHeaderContainer>
            <OrdersTable/>
        </OrdersPage>

    )
}