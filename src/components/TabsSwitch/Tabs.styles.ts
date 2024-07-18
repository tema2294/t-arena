import {styled, Typography} from "@mui/material";

export const TabsContainer = styled('div')(({theme}) => ({
    display: 'flex',
    width: 'fit-content'
}))

export const TabOption = styled(Typography)<{ selected: boolean }>(({theme, selected}) => ({
    display: 'flex',
    width: 'fit-content',
    padding: '5px 12px',
    border: `1px solid ${theme.palette.custom.tabs.border}`,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    '&:last-child': {
        borderRadius: '0 8px 8px 0'
    },
    '&:first-of-type': {
        borderRadius: '8px 0 0 8px'
    },
    ...(selected && {
        background: theme.palette.custom.tabs.activeBackground,
        color: theme.palette.custom.tabs.activeColor,
    })
}))
