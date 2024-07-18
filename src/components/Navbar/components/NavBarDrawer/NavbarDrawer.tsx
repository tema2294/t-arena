import {useTranslation} from "hocs/Localization";
import {FC} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Icon} from "../../../Icon";
import {NAVIGATION_LIST} from "../../Navbar.constants";
import {Container, MenuContainer, MenuItem, NavLogo, NavMenuText} from "../../Navbar.styles";
import {BurgerIcon, Drawer, LogoContainer} from './NavBardDrawer.styles';
import {INavBardDrawerProps} from "./NavBarDrawer.types";

export const NavbarDrawer: FC<INavBardDrawerProps> = ({isOpenDrawer, handleOpenDrawer, handleCloseDrawer}) => {
    const {translate} = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Drawer open={isOpenDrawer} anchor={'left'} onClose={handleCloseDrawer}>
            <>
                <LogoContainer onClick={handleCloseDrawer}>
                    <BurgerIcon name={'BurgerMenu'}/>
                    <NavLogo open={isOpenDrawer} name={'Logo'}/>
                </LogoContainer>
                <Container>
                    <MenuContainer>
                        {NAVIGATION_LIST.map(({textKey, url, iconName}) => {
                            const isSelected = url === location.pathname
                            const handleNavigate = () => {
                                navigate(url);
                            }

                            return (
                                <MenuItem selected={isSelected} key={textKey} onClick={handleNavigate}>
                                    <Icon activeCursor={true} name={iconName}/>
                                    <NavMenuText color={'textPrimary'} open={isOpenDrawer}>
                                        {translate(textKey)}
                                    </NavMenuText>
                                </MenuItem>
                            )
                        })}
                    </MenuContainer>
                </Container>
            </>
        </Drawer>
    )
}