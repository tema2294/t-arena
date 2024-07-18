import {Checkbox, MenuItem, styled} from "@mui/material";

export const MultiselectMenuItem = styled(MenuItem)(({theme}) => ({
    padding: '8px 24px',
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    '&:hover': {
        background: 'var(--dropdown-bg-hover-color)',
    }
}))

export const OptionCheckbox = styled(Checkbox)(({theme}) => ({
    width: '16px',
    height: '16px',
    padding: 0,
}))