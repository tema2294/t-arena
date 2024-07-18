import {Button, styled} from "@mui/material";

export const ButtonBackStyled = styled(Button)(({theme}) => ({
    color: 'var(--accent-color)',
    width: 'fit-content',
    padding: 0,
    minWidth: 'fit-content',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '20px',
}))