import {styled, Typography} from "@mui/material";

export const Badge = styled(Typography)(({theme}) => ({
    display: 'flex',
    padding: '2px 7px',
    fontSize: 12,
    fontWeight: 600,
    lineHeight: '16px',
    color: 'var(--chip-primary-color)',
    background: 'var(--chip-primary-bg-color)',
    width: 'fit-content',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
}));