import {ListItemIcon, Typography} from "@mui/material";
import {Icon} from "components/Icon";
import React, {FC} from "react";
import {
    SettingList,
    SettingMenu,
    SettingMenuItem,
    ThemeSwitcher,
    UserInfo,
    UserInfoText,
    UserLabel
} from "./SettingsDropdown.styles";
import {THEME_MODE, useTheme} from "hocs/Theme";
import {constructLSItem} from "tools/local-storage";
import {LOCAL_STORAGE_KEYS} from "constants/localStorageKeys";
import {setLoginMode} from "redux-store/appState";
import {useAppDispatch} from "redux-store/hooks";
import {EDictionaryKey, ELanguage, useLocalization, useTranslation} from "hocs/Localization";
import {IDropdownControlObject} from "hooks/use-drop-down-control";

export const SettingsDropdown: FC<IDropdownControlObject> = (props) => {
    const {isOpen, anchorEl, handleClose} = props;
    const {mode, toggleTheme} = useTheme()
    const isDarkMode = mode === THEME_MODE.dark;
    const dispatch = useAppDispatch();
    const {translate} = useTranslation();
    const {setLanguage, language} = useLocalization();
    const logout = () => {
        constructLSItem(LOCAL_STORAGE_KEYS.access_token).setItemData('');
        constructLSItem(LOCAL_STORAGE_KEYS.refresh_token).setItemData('')
        dispatch(setLoginMode(false));
    }

    const handleChangeLanguage = () => {
        const nextLanguage = language === ELanguage.Ru ? ELanguage.Eng : ELanguage.Ru;
        setLanguage(nextLanguage);
    }

    return (
        <SettingMenu
            anchorEl={anchorEl}
            open={isOpen}
            onClose={handleClose}
            autoFocus={false}
        >
            <UserInfo>
                <UserLabel title={'F'}/>
                <UserInfoText>
                    <Typography variant={'body500'}>Freddy Smith</Typography>
                    <Typography variant={'caption'}>f.smithhh@gmail.com</Typography>
                </UserInfoText>
            </UserInfo>
            <SettingList>
                <SettingMenuItem onClick={toggleTheme}>
                    <ListItemIcon>
                        <Icon name={'Moon'}/>
                    </ListItemIcon>
                    <Typography variant={'body500'}>{translate(EDictionaryKey.DarkMode)}</Typography>
                    <ThemeSwitcher checked={isDarkMode}/>
                </SettingMenuItem>
                <SettingMenuItem onClick={handleChangeLanguage}>
                    <ListItemIcon>
                        <Icon name={'Globe'}/>
                    </ListItemIcon>
                    <Typography variant={'body500'}>{translate(EDictionaryKey.Language)}</Typography>
                </SettingMenuItem>
                <SettingMenuItem onClick={logout}>
                    <ListItemIcon>
                        <Icon name={'Logout'}/>
                    </ListItemIcon>
                    <Typography variant={'body500'}>{translate(EDictionaryKey.Logout)}</Typography>
                </SettingMenuItem>
            </SettingList>
        </SettingMenu>
    )
}