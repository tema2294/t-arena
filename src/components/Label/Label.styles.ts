import {styled} from "@mui/material";

export const LabelContainer = styled('div')(({theme}) => ({
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: 'var(--btn-header-bg-color)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}))