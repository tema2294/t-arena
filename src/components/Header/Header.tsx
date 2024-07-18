import {ZONE_IMAGE} from "components/Header/Header.constants";
import {MarketTimer} from "components/MarketTimer";
import {useDropdownControl} from "hooks/use-drop-down-control";
import React, {Fragment} from "react";
import {TCombineResponseTableData, useGetCombineDataQuery} from "redux-store/api";
import {NavbarDrawer, useNavBarDrawerController} from "../Navbar";
import {BurgerIcon} from "../Navbar/components/NavBarDrawer/NavBardDrawer.styles";
import {SettingsDropdown} from "../SettingsDropdown";
import {
    ControlContainer,
    HeaderContainer,
    HeaderMainContent,
    MenuContainer,
    NotificationIcon,
    StyledDivider,
    UserLabel,
    ZoneList
} from "./Header.styles";

export const Header = () => {
    const settingsDropdownControlData = useDropdownControl();
    const {handleClick: settingsDropdownHandleClick} = settingsDropdownControlData;
    const {data} = useGetCombineDataQuery();
    const {zoneList} = data || {} as TCombineResponseTableData;
    const formatZoneList = Object.values(zoneList || {});

    const drawerProps = useNavBarDrawerController();
    const {handleOpenDrawer} = drawerProps;

    return (<>
            <NavbarDrawer {...drawerProps} />
            <HeaderContainer>
                <MenuContainer onClick={handleOpenDrawer}>
                    <BurgerIcon activeCursor={true} name={'BurgerMenu'}/>
                </MenuContainer>
                <HeaderMainContent>
                    <ZoneList>
                        {formatZoneList.map((zoneData) => (
                            <Fragment key={zoneData.id}>
                                <MarketTimer imageSrc={ZONE_IMAGE[zoneData.id]}  {...zoneData}/>
                                <StyledDivider height={16}/>
                            </Fragment>))}
                    </ZoneList>
                    <ControlContainer>
                        <NotificationIcon name={'Notification'}/>
                        <UserLabel onClick={settingsDropdownHandleClick} title={'F'}/>
                        <SettingsDropdown {...settingsDropdownControlData} />
                    </ControlContainer>
                </HeaderMainContent>
            </HeaderContainer>
        </>
    )
}