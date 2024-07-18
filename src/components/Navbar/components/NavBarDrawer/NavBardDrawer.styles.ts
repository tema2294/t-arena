import {Drawer as MuiDrawer, styled} from "@mui/material";
import {HEADER_HEIGHT} from "../../../../constants/layout";
import {Icon} from "../../../Icon";
import {closedMixin, drawerWidth, openedMixin} from "../../Navbar.styles";

export const Drawer = styled(MuiDrawer)(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        '& > .MuiDrawer-paper': {
            background: 'var(--bg-color)',
            border: 'none',
        },
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export const LogoContainer = styled('div')<{ fixed?: boolean }>(({theme, fixed}) => ({
    display: "flex",
    gap: 12,
    height: HEADER_HEIGHT,
    alignItems: 'center',
    cursor: 'pointer',
    width: '100%',
    justifyContent: 'flex-start',
    padding: '18px 32px',
    flexShrink: 0,
}));


export const BurgerIcon = styled(Icon)(({theme}) => ({
    color: 'var(--text-color)'
}))