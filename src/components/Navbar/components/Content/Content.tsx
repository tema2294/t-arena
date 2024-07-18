import {FC} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Icon} from "../../../Icon";
import {NAVIGATION_LIST} from "../../Navbar.constants";
import {Container, MenuContainer, MenuItem} from "../../Navbar.styles";

export const Content: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
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
                            </MenuItem>
                        )
                    })}
                </MenuContainer>
            </Container>
        </>
    )
}