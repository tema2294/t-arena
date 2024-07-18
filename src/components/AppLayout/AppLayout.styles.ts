import {styled} from "@mui/material";
import {HEADER_HEIGHT} from "constants/layout";

export const AppContainer = styled('div')({
    width: '100vw',
    height: '100vh',
    display: "flex",
    flexDirection: 'column',
    flexShrink: 0,
    flexGrow: 0,
    overflow: "hidden",
    background: 'var(--bg-color)',
    '& *': {
        boxSizing: 'border-box'
    }
})
export const Content = styled('section')(({theme}) => ({
    width: '100%',
    display: "flex",
    height: `calc(100vh - ${HEADER_HEIGHT}px)`,
}))
