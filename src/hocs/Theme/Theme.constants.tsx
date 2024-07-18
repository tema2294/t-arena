import {createTheme} from "@mui/material/styles";
import {Icon} from "components/Icon";
import Inter from 'fonts/Inter-Regular.ttf'
import {createContext} from "react";
import {IThemeContext} from "./Theme.types";

export enum THEME_MODE {
    light = 'light',
    dark = 'dark'
}

export const SCROLLBAR_SIZE = 11;


const CSS_VARIABLES_DARK_THEME = {
    "--accent-color": "#4DB2FF",
    "--article-color": "#FFFFFF",
    "--bg-color": "#1A2026",
    "--bg-hover-color": "#212A33",
    "--btn-default-active-color": "#FFFFFF",
    "--btn-default-bg-active-color": "var(--btn-primary-bg-color)",
    "--btn-default-bg-color": "#242E38",
    "--btn-default-bg-hover-color": "#293440",
    "--btn-default-border-hover": "rgba(36,46,56,0)",
    "--btn-default-border": "rgba(36,46,56,0)",
    "--btn-default-color": "#FFFFFF",
    "--btn-header-bg-color": "#293440",
    "--btn-header-bg-hover-color": "#3F4E60",
    "--btn-header-color": "#FFFFFF",
    "--btn-primary-bg-color": "#248BDA",
    "--btn-primary-bg-hover-color": "#207CC2",
    "--btn-primary-color": "#FFFFFF",
    "--btn-primary-disabled-color": "#A6D8FF",
    "--chip-default-bg-color": "var(--dropdown-bg-hover-color)",
    "--chip-default-bg-hover-color": "var(--dropdown-bg-color)",
    "--chip-default-border-hover": "rgba(46,58,71,0)",
    "--chip-default-border": "rgba(56,69,83,0)",
    "--chip-default-color": "var(--article-color)",
    "--chip-error-bg-color": "var(--dropdown-bg-hover-color)",
    "--chip-filter-active-bg": "#FFFFFF",
    "--chip-filter-active-color": "var(--accent-color)",
    "--chip-filter-default-bg": "var(--accent-color)",
    "--chip-filter-default-color": "#FFFFFF",
    "--chip-primary-bg-color": "var(--dropdown-bg-hover-color)",
    "--chip-warning-bg-color": "var(--dropdown-bg-hover-color)",
    "--divider": "var(--btn-default-bg-color)",
    "--dropdown-bg-color": "#2E3A47",
    "--dropdown-bg-hover-color": "#384553",
    "--dropdown-color": "#DDE4EB",
    "--dropdown-secondary-color": "#8C9AA9",
    "--field-accent-color": "#248BDA",
    "--field-bg-color": "#242E38",
    "--field-border": "rgba(36,46,56,0)",
    "--field-color": "#FFFFFF",
    "--field-placeholder-color": "#8A98A6",
    "--field-second-color": "#8494A3",
    "--field-sign-border-hover": "var(--dropdown-bg-hover-color)",
    "--field-sign-border": "var(--dropdown-bg-color)",
    "--footer-bg-color": "#111417",
    "--footer-color": "#6D8394",
    "--header-bg-color": "rgba(33,42,51,0.9)",
    "--header-border": "rgba(33,42,51,0)",
    "--header-color": "#FFFFFF",
    "--header-divider": "#293440",
    "--header-tab-color-active": "#FFFFFF",
    "--header-tab-color-rgb": "#FF5863",
    "--img-color": "#20262D",
    "--img-shadow": "#161B21",
    "--inactive-bg-color": "#212A33",
    "--inactive-color": "#354352",
    "--side-nav-item-active": "var(--btn-default-bg-color)",
    "--tab-active": "var(--article-color)",
    "--tab-default": "var(--text-color)",
    "--tab-hover": "rgba(203,215,229,0.9)",
    "--table-bg-color": "#212A33",
    "--table-bg-hover-color": "#293440",
    "--table-border": "rgba(26,32,38,0)",
    "--table-header-bg-color": "#293440",
    "--table-header-border": "var(--table-header-bg-color)",
    "--table-item-border": "var(--bg-color)",
    "--table-text-color": "#8C9AA9",
    "--text-color": "#8FA0B2",
    "--tooltip-bg-color": "#2D3C4C",
    "--tooltip-color": "#FFFFFF",
    "--unavail-color": "#FF5863"
};

const CSS_VARIABLES_LIGHT_THEME = {
    "--accent-color": "#3599FC",
    "--article-color": "#1F2229",
    "--bg-color": "#FFFFFF",
    "--bg-hover-color": "#212A33",
    "--btn-default-active-color": "#FFFFFF",
    "--btn-default-bg-active-color": "var(--btn-primary-bg-color)",
    "--btn-default-bg-color": "#EEF2F6",
    "--btn-default-bg-hover-color": "#E8EDF3",
    "--btn-default-border-hover": "#C0C8D0",
    "--btn-default-border": "#E2E5E9",
    "--btn-default-color": "var(--article-color)",
    "--btn-header-bg-color": "#EDF2F7",
    "--btn-header-bg-hover-color": "#3F4E60",
    "--btn-header-color": "#FFFFFF",
    "--btn-primary-bg-color": "#3599FC",
    "--btn-primary-bg-hover-color": "#188AFC",
    "--btn-primary-color": "#FFFFFF",
    "--btn-primary-disabled-color": "#A6D8FF",
    "--chip-default-bg-color": "var(--btn-default-bg-color)",
    "--chip-default-bg-hover-color": "#FFFFFF",
    "--chip-default-border-hover": "var(--btn-default-border-hover)",
    "--chip-default-border": "var(--btn-default-border)",
    "--chip-default-color": "var(--article-color)",
    "--chip-error-bg-color": "rgba(255,88,99,0.1)",
    "--chip-filter-active-bg": "var(--accent-color)",
    "--chip-filter-active-color": "#FFFFFF",
    "--chip-filter-default-bg": "var(--accent-color)",
    "--chip-filter-default-color": "#FFFFFF",
    "--chip-primary-bg-color": "rgba(53,153,252,0.1)",
    "--chip-warning-bg-color": "rgba(240,159,0,0.1)",
    "--divider": "#E2E5E9",
    "--dropdown-bg-color": "#FFFFFF",
    "--dropdown-bg-hover-color": "#F4F7FA",
    "--dropdown-color": "#DDE4EB",
    "--dropdown-secondary-color": "#8C9AA9",
    "--field-accent-color": "#248BDA",
    "--field-bg-color": "#EDF2F7",
    "--field-border": "#E2E5E9",
    "--field-color": "var(--article-color)",
    "--field-placeholder-color": "#7E868F",
    "--field-second-color": "#8494A3",
    "--field-sign-border-hover": "#C0C8D0",
    "--field-sign-border": "var(--field-border)",
    "--footer-bg-color": "#111417",
    "--footer-color": "#6D8394",
    "--header-bg-color": "#FFFFFF",
    "--header-border": "#E2E5E9",
    "--header-color": "var(--article-color)",
    "--header-divider": "#E2E5E9",
    "--header-tab-color-active": "#FFFFFF",
    "--header-tab-color-rgb": "#FF5863",
    "--img-color": "#CFDBE3",
    "--img-shadow": "#DFE4E8",
    "--inactive-bg-color": "#212A33",
    "--inactive-color": "#354352",
    "--side-nav-item-active": "#EFF8FF",
    "--tab-active": "var(--article-color)",
    "--tab-default": "var(--text-color)",
    "--tab-hover": "var(--article-color)",
    "--table-bg-color": "#FFFFFF",
    "--table-bg-hover-color": "var(--table-header-bg-color)",
    "--table-border": "#E3E8EF",
    "--table-header-bg-color": "#EEF2F6",
    "--table-header-border": "#E3E8EF",
    "--table-item-border": "#E3E8EF",
    "--table-text-color": "#8C9AA9",
    "--text-color": "#5B6B81",
    "--tooltip-bg-color": "#2D3C4C",
    "--tooltip-color": "#FFFFFF",
    "--unavail-color": "#FF5863"
};

export const SCROLL_BAR_STYLES = {
    '&::-webkit-scrollbar': {
        height: SCROLLBAR_SIZE,
        width: SCROLLBAR_SIZE,
    },

    '&::-webkit-scrollbar-': {
        backgroundColor: 'transparent',
    },

    '&::-webkit-scrollbar-thumb': {
        backgroundClip: 'content-box',
        backgroundColor: 'var(--field-second-color)',
        border: '2px solid transparent',
        borderRadius: '20px',
    },

    '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: 'var(--field-second-color)',
    },

    '&::-webkit-scrollbar-thumb:active': {
        backgroundColor: 'var(--field-second-color)',
    },
}

export const DEFAULT_THEME_STYLES = {
    typography: {
        fontFamily: 'Inter',
        body1: {
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '20px'
        },
        body2: {
            fontSize: '12px',
            fontWeight: 500,
            // lineHeight: '16px'
        },
        h1: {
            fontSize: '30px',
            fontWeight: 600,
            lineHeight: '38px'
        },
        body500: {
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '20px'
        },
        body14_400: {
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px'
        },
        body14_600: {
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '20px'
        },
        pageSubtitle: {
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '20px',
            color: 'var(--text-color)',
        },
        caption: {
            fontSize: '12px',
            fontWeight: 500,
            lineHeight: '16px',
            color: 'var(--text-color)',
        },
    },

    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontWeight: 500
                }
            }
        },

        MuiTextField: {
            styleOverrides: {
                root: {
                    '--TextField-brandBorderColor': '#212b37',
                    '--TextField-brandBorderHoverColor': '#3D5067',
                    '--TextField-brandBorderFocusedColor': '#5DB7F7',
                    '& label.Mui-focused': {
                        color: 'var(--TextField-brandBorderFocusedColor)',
                    },
                    '& label': {
                        color: '#8FA0B2',
                    },
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    '&::before': {
                        borderBottom: '1px solid var(--TextField-brandBorderColor)',
                    },
                    '&:hover:not(.Mui-disabled, .Mui-error):before': {
                        borderBottom: '1px solid var(--TextField-brandBorderHoverColor)',
                    },
                    '&.Mui-focused:after': {
                        borderBottom: '1px solid var(--TextField-brandBorderFocusedColor)',
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                filled: {
                    background: '#202B36',
                    color: '#72B7F2',
                    fontSize: 12,
                    fontWeight: 500,
                    lineHeight: 16,
                    borderRadius: 100,
                    height: 24
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                '@font-face': {
                    fontFamily: 'Inter',
                    src: `url(${Inter}) format('truetype')`,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    color: 'var(--article-color)'
                },
                ...SCROLL_BAR_STYLES,
            }
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    background: '#2e3a47',
                    maxHeight: 400
                },
            }
        },

        MuiMenuItem: {
            styleOverrides: {
                root: {
                    cursor: 'pointer',
                }
            }
        },
        MuiCheckbox: {
            defaultProps: {
                icon: <Icon name="Checkbox"/>,
                checkedIcon: <Icon name="CheckboxActive"/>
            }
        },
    },

};

const darkTheme = createTheme({
    typography: DEFAULT_THEME_STYLES.typography,
    components: {
        ...DEFAULT_THEME_STYLES.components,
        MuiCssBaseline: {
            styleOverrides: {
                ...DEFAULT_THEME_STYLES.components.MuiCssBaseline.styleOverrides,
                'body': {
                    ...CSS_VARIABLES_DARK_THEME,
                },
            }
        }

    },
    palette: {
        mode: THEME_MODE.dark,
        custom: {
            tabs: {
                border: '#202B36',
                activeBackground: '#202B36',
                activeColor: '#5EB5F7'
            },
        }
    },
});

const lightTheme = createTheme({
    typography: DEFAULT_THEME_STYLES.typography,
    components: {
        ...DEFAULT_THEME_STYLES.components,
        MuiCssBaseline: {
            styleOverrides: {
                ...DEFAULT_THEME_STYLES.components.MuiCssBaseline.styleOverrides,
                'body': {
                    ...CSS_VARIABLES_LIGHT_THEME,
                },
            }
        }
    },
    palette: {
        mode: THEME_MODE.light,
        background: {
            default: '#E6EFF6',
        },
        custom: {
            tabs: {
                border: '#202B36',
                activeBackground: '#202B36',
                activeColor: '#5EB5F7'
            },
        }
    },
});

export const THEME = {
    [THEME_MODE.light]: lightTheme,
    [THEME_MODE.dark]: darkTheme
}
export const OPPOSITE_MODE = {
    [THEME_MODE.light]: THEME_MODE.dark,
    [THEME_MODE.dark]: THEME_MODE.light
}

export const DEFAULT_THEME_CONTEXT_VALUE: IThemeContext = {
    toggleTheme: () => {
    },
    mode: THEME_MODE.dark
}

export const ThemeContext = createContext(DEFAULT_THEME_CONTEXT_VALUE);
