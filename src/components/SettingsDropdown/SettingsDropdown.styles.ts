import {Menu, MenuItem, styled} from "@mui/material";
import {Label} from "../Label";
import {Switch} from '../Switch'

export const SettingMenu = styled(Menu)(({theme}) => ({
    '& .MuiPaper-root': {
        background: 'var(--dropdown-bg-color)',
    },
    '& .MuiList-root': {
        width: '240px',
        padding: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: 8
    }
}))
export const UserInfo = styled('div')(({theme}) => ({
    display: 'flex',
    gap: 16,
    padding: '8px'
}))

export const ThemeSwitcher = styled(Switch)(({theme}) => ({
    marginLeft: 'auto'
}))

export const UserInfoText = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}))

export const SettingList = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
}));

export const SettingMenuItem = styled(MenuItem)(({theme}) => ({
    padding: '8px 12px',
    '&:hover': {
        background: 'inherit'
    }
}))

export const UserLabel = styled(Label)({
    height: 48,
    width: 48
})