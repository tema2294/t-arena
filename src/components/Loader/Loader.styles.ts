import {keyframes, styled, Typography} from "@mui/material";
import {Icon} from "components/Icon";

export const LoaderContainer = styled('div')<{ hasShadow?: boolean }>(({theme, hasShadow}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
    position: 'absolute',
    textAlign: 'center',
    ...(!hasShadow && {
        transform: 'translate(-50%,-50%)',
        top: '50%',
        left: '50%',
    }),
    ...(hasShadow && {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        justifyContent: 'center',
        zIndex: 1,
    })
}))

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderIcon = styled(Icon)(({theme}) => ({
    animation: `${rotate} 0.6s linear infinite`,
}))

export const LoaderText = styled(Typography)(({theme}) => ({
    fontSize: 14,
}))

