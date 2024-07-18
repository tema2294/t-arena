import {styled} from "@mui/material";

export const HeaderContainer = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '24px 0 12px',
    gap: 8,
}))
export const Header = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
}))

export const TableWrapper = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    marginTop: 16,
}))