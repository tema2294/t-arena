import {styled, Tab, Tabs} from "@mui/material";

export const CustomTab = styled(Tab)(({theme}) => ({

    '& .MuiTypography-root': {
        color: 'var(--tab-default)',
    },

    '&.Mui-selected .MuiTypography-root': {
        color: 'var(--tab-active)',
        border: 'none'
    },

    padding: '10px 0 4px',
}))
export const TabsContainer = styled(Tabs)(({theme}) => ({

    '& .MuiTabs-flexContainer': {
        gap: 24,
    },
    '& .MuiTabs-indicator': {
        display: 'none',
    },
}))
export const CustomLabelContainer = styled('div')(({theme}) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    width: 'max-content',
    gap: 7,
    overflow: 'hidden',
    '& svg': {
        width: '100%'
    }
}))
