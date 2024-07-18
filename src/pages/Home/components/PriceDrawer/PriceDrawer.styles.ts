import {CSSObject, Drawer as MuiDrawer, styled, Theme, Typography} from "@mui/material";

const drawerWidth = 528;

export const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: '0.25s',
    }),

    overflowX: 'hidden',
});

export const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: '0.25s',
    }),
    overflowX: 'hidden',
    width: 0,
});
export const Drawer = styled(MuiDrawer)<{ open: boolean }>(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        height: '100%',
        boxSizing: 'border-box',
        '& > .MuiDrawer-paper': {
            position: 'relative',
            visibility: `${open ? 'visible' : 'hidden'} !important`,
            background: 'var(--bg-color)',
            border: 'none',
        },
        ...(open && {
            marginRight: 24,
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export const Content = styled('div')(({theme}) => ({
    display: 'flex',
    padding: '16px 0 0',
    flexDirection: 'column',
    width: drawerWidth,
    gap: 20,
    maxWidth: '100%',
    flexGrow: 0,
    maxHeight: '100%',
}));

export const HeaderText = styled(Typography)(({theme}) => ({
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '28px',
}));

export const Header = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    gap: 16,
    paddingBottom: 20,
    borderBottom: '1px solid var(--header-divider)',

    '& path': {
        stroke: 'var(--text-color)'
    }
}));

export const TableList = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: "column",
    gap: 32,
    overflowY: 'auto'
}));
