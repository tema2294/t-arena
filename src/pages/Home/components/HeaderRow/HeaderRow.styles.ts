import {styled} from "@mui/material";

export const RowHeaderContainer = styled('div')(({theme}) => ({
    display: 'flex',
    width: '100%',
    height: 40,
    background: 'var(--table-header-bg-color)',
    borderRadius: '9px 9px 0px 0px',
}))