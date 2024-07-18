import {ThemeContext} from "./Theme.constants";
import {useContext} from "react";
import {IThemeContext} from "hocs/Theme/Theme.types";

export const useTheme = (): IThemeContext => useContext(ThemeContext);

