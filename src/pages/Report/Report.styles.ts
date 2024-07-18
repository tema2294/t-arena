import {styled, Typography} from "@mui/material";

export const PageHeaderContainer = styled('div')(() => ({
    display: 'flex',
    padding: '24px 0 16px',
    justifyContent: 'space-between',
    alignItems: 'center'
}))

export const HeaderColumn = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
}))

export const CurrencyTypography = styled(Typography)(({theme}) => ({
    display: 'flex',
    gap: 8,
}))