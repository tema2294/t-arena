import React, {FC, PropsWithChildren} from 'react';
import {ThemeProvider as MUIThemeProvider} from '@mui/material/styles';
import {CssBaseline, PaletteMode} from "@mui/material";
import {OPPOSITE_MODE, THEME, THEME_MODE, ThemeContext} from "./Theme.constants";
import {constructLSItem} from "tools/local-storage";
import {LOCAL_STORAGE_KEYS} from "constants/localStorageKeys";


export const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
    const {setItemData: setStorageTheme, getItemData: getStorageTheme} = constructLSItem(LOCAL_STORAGE_KEYS.theme);
    const [mode, setMode] = React.useState(getStorageTheme(THEME_MODE.dark) as PaletteMode);
    const toggleTheme = () => {
        setMode((prevThemeMode) => {
            const nextThemeValue = OPPOSITE_MODE[prevThemeMode];
            setStorageTheme(nextThemeValue);

            return nextThemeValue
        });
    };

    const currentTheme = THEME[mode];

    return (
        <ThemeContext.Provider value={{toggleTheme, mode}}>
            <MUIThemeProvider theme={currentTheme}>
                <CssBaseline/>
                {children}
            </MUIThemeProvider>
        </ThemeContext.Provider>
    )
}
