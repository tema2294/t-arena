import {PaletteMode} from "@mui/material";

export interface IThemeContext {
    toggleTheme: () => void,
    mode: PaletteMode
}