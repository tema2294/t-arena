import {CSSObject, styled, Theme, Typography} from "@mui/material";
import {Icon} from "components/Icon";

export const drawerWidth = 240;

export const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

export const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: 0,
});


export const FixedNavBar = styled('div')(
    ({theme}) => ({
        flexShrink: 0,
        display: 'flex',
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        overflow: 'hidden',
        width: '85px',
        position: 'relative',
        background: 'var(--bg-color)',
        border: 'none',
    }),
);

export const Container = styled('div')(({theme}) => ({
    display: "flex",
    flexDirection: 'column',
    padding: '24px 16px',
    gap: 20,
}))

export const MenuContainer = styled('div')({
    display: "flex",
    flexDirection: 'column',
    gap: 8,
})


export const NavMenuText = styled(Typography)<{ open: boolean }>(({open, theme}) => ({
    opacity: open ? 1 : 0,
    width: open ? 'auto' : 0,
    transition: theme.transitions.create(['opacity', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    whiteSpace: 'nowrap',
}));

export const NavLogo = styled(Icon)<{ open: boolean }>(({open, theme}) => ({
    opacity: open ? 1 : 0,
    width: open ? 'auto' : 0,
    transition: theme.transitions.create(['opacity', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),


    '& > path': {
        fill: 'var(--article-color)'
    },
    '& > path:last-child': {
        fill: 'var(--accent-color)'
    },

}));


export const MenuItem = styled('div')<{ selected: boolean }>(({theme, selected}) => {

    const MenuItemHover = {
        background: 'var(--side-nav-item-active)',
        color: 'var(--accent-color)',
    };

    return {
        color: 'var(--text-color)',
        display: "flex",
        width: '100%',
        gap: 12,
        alignItems: 'center',
        borderRadius: 8,
        justifyContent: 'flex-start',
        padding: '10px 16px',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',

        '& > p': {
            color: 'var(--text-color)',
        },
        '& > svg': {
            width: 20,
            height: 20,
            flexShrink: 0,
        },

        '&:hover': MenuItemHover,
    
        ...(selected && MenuItemHover),
    }
})
