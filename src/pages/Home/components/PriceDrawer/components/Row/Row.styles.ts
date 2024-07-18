import {styled} from "@mui/material";

export const Row = styled('div')<{ isActive: boolean }>(({theme, isActive}) => ({
    display: 'flex',
    width: '100%',
    height: 56,

    cursor: isActive ? 'pointer' : 'initial',
    background: 'var(--table-bg-color)',

    '&:not(:last-child)': {
        borderBottom: `1px solid var(--bg-color)`,
    },
    '&:hover': {
        background: 'var(--table-bg-hover-color)',
    }
}))

export const HeaderRowWrapper = styled('div')(({theme}) => ({
    display: 'flex',
    width: '100%',
    height: 40,
    background: 'var(--table-header-bg-color)',
    borderRadius: '9px 9px 0px 0px',
}))