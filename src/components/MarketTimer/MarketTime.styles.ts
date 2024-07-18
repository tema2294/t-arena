import {styled, Typography} from "@mui/material";

export const Container = styled('div')({
    display: "flex",
    alignItems: 'center',
    gap: 12
})
export const Content = styled('div')({
    display: "flex",
    flexDirection: 'column',
    whiteSpace: 'nowrap',
    gap: 2
})
export const HeaderContainer = styled('div')({
    display: "flex",
    alignItems: 'center',
    gap: 2
})

export const Img = styled('img')({
    borderRadius: '50%',
})

export const Timer = styled(Typography)({
    minWidth: '61px'
})
