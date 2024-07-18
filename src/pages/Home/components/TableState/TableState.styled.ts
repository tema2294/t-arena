import {styled, Typography} from "@mui/material";

export const Title = styled(Typography)(({theme}) => ({
    fontSize: 16,
    fontWeight: 600,
}))

export const SubTitleText = styled(Typography)(({theme}) => ({
    fontSize: 14,
    fontWeight: 400,
    color: 'var(--text-color)',
}))

export const StateContainer = styled('div')(() => ({
    display: "flex",
    flexDirection: 'column',
    gap: 16,
    width: 360,
    alignItems: 'center',
    alignSelf: 'center',
    margin: 'auto',
}));

export const TextContainer = styled('div')(() => ({
    display: "flex",
    flexDirection: 'column',
    gap: 4,
    textAlign: 'center'
}));