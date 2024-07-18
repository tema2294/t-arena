import {Typography} from "@mui/material";
import {ButtonBack} from "components/ButtonBack";
import {PageContainer} from "components/PageContainer";
import {Tabs} from "components/Tabs";
import {ERouterPath} from "hocs/Router/Router.constants";
import {useState} from "react";
import {OrderTable} from "./components";
import {TAB_LIST} from "./OrderDetail.constants";
import {Header, HeaderContainer, TableWrapper} from "./OrderDetail.styles";


export const OrderDetail = () => {
    const [currentTab, setCurrentTab] = useState(TAB_LIST[1]);

    return (
        <PageContainer>
            <HeaderContainer>
                <ButtonBack to={ERouterPath.Orders}>
                    Back
                </ButtonBack>
                <Header>
                    <Typography variant={'h1'}>
                        Order #14841
                    </Typography>
                    <Typography variant={'pageSubtitle'}>
                        STOCK · Created 18 Dec 2023
                    </Typography>
                </Header>
            </HeaderContainer>
            <Tabs options={TAB_LIST} value={currentTab.value} onChange={setCurrentTab}/>
            <TableWrapper>
                <Typography color={'var(--text-color)'} variant={'body14_400'}>
                    729 items · Total amount $546,021
                </Typography>
                <OrderTable/>
            </TableWrapper>
        </PageContainer>
    )
}