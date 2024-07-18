import {styled, Typography} from "@mui/material";
import LoginBgDark from 'assets/login-dark-bg.svg';
import LoginBgLight from 'assets/login-light-bg.svg';
import {Icon} from "components/Icon";
import {THEME_MODE} from "hocs/Theme";

export const LoginPage = styled('div')(({theme}) => ({
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${theme.palette.mode === THEME_MODE.dark ? LoginBgDark : LoginBgLight})`,
    backgroundRepeat: 'repeat',
    display: 'grid',
    gridTemplateColumns: '1fr',
}))

export const LoginContent = styled('div')(({theme}) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 32

}))


export const Header = styled('header')(({theme}) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}))

export const FooterText = styled(Typography)(({theme}) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    fontWeight: 400,
    fontSize: 14,
    width: '100%',
}))


export const SelectContainer = styled('header')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
}))

export const IconGlobe = styled(Icon)(({theme}) => ({
    '& path': {
        stroke: 'var(--text-color)',
    }
}))

export const ControlBar = styled('header')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    gap: 24,
}))

export const ThemeIcon = styled(Icon)(({theme}) => ({
    '& path': {
        stroke: 'var(--text-color)',
    }
}))

export const LogoIcon = styled(Icon)(({theme}) => ({
    '& > :first-of-type': {
        fill: 'var(--article-color)',
    },
    '& > :last-child': {
        fill: 'var(--accent-color)',
    }
}))