import {styled} from "@mui/material";

export const PageContainer = styled('section')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderRadius: '16px 16px 0 0',
    overflowY: 'hidden',
    overflowX: 'hidden',
    height: '100%',
    padding: '0 24px 0 8px'
    // height: `calc(100vh - ${HEADER_HEIGHT}px)`,
}))
