import {Icon} from "components/Icon";
import {useFilteredDataFromContext} from "hocs/FilterDataContext";
import React, {FC, useEffect} from "react";
import {selectPriceDrawerItemName, setPriceDrawerItemName} from "redux-store/appState";
import {useAppDispatch, useAppSelector} from "redux-store/hooks";
import {OffersTable, PurchasesTable} from "./components";
import {Content, Drawer, Header, HeaderText, TableList} from './PriceDrawer.styles';

export const PriceDrawer: FC = () => {
    const dispatch = useAppDispatch();
    const {filteredData} = useFilteredDataFromContext()
    const priceDrawerItemName = useAppSelector(selectPriceDrawerItemName);

    const skuData = filteredData[priceDrawerItemName] || {};

    const isOpen = !!priceDrawerItemName;
    const {formedItemName} = skuData || {};
    console.log(skuData);

    const handleCloseDrawer = (): void => {
        dispatch(setPriceDrawerItemName(undefined));
    }

    useEffect(() => {
        return () => {
            handleCloseDrawer();
        }
    }, []);


    return (
        <Drawer
            variant="persistent"
            anchor="right"
            open={isOpen}
        >
            <Content>
                <Header>
                    <HeaderText>
                        {formedItemName}
                    </HeaderText>
                    <Icon activeCursor={true} onClick={handleCloseDrawer} name={'DrawerCross'}/>
                </Header>
                <TableList>
                    <PurchasesTable/>
                    <OffersTable/>
                </TableList>
            </Content>
        </Drawer>
    )
}