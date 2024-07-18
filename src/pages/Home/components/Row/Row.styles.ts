import {styled} from "@mui/material";

export const RowContainer = styled('div')(({theme}) => ({
    display: 'flex',
    cursor: 'pointer',
    width: '100%',
    background: 'var(--table-bg-color)',
    borderBottom: `1px solid var(--bg-color)`,

    '&:hover': {
        background: 'var(--table-bg-hover-color)',
    },
}))
