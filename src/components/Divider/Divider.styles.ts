import {styled} from "@mui/material";

export const Divider = styled('div')<{ height: number }>(({theme, height}) => ({
    width: '1px',
    height: height,
    background: theme.palette.action.hover,
}))
