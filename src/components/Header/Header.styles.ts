import {styled} from "@mui/material";
import {Divider} from "components/Divider";
import {Label} from "components/Label";
import {HEADER_HEIGHT} from "constants/layout";
import {Icon} from "../Icon";

export const HeaderContainer = styled('section')(({theme}) => ({
    width: '100%',
    display: "flex",
    alignItems: 'center',
    gap: 18,
    height: HEADER_HEIGHT,
    background: 'var(--header-bg-color)',
    borderBottom: '1px solid var(--header-border)',
    padding: '0 40px 0 16px'
}))

export const HeaderMainContent = styled('section')(({theme}) => ({
    width: '100%',
    display: "flex",
    justifyContent: 'space-between',
    gap: 10,
    height: '100%',
}))
export const ZoneList = styled('div')({
    display: "flex",
    gap: 24,
    alignItems: 'center',
    flexShrink: 0,
    height: HEADER_HEIGHT,
})

export const ControlContainer = styled('div')({
    display: "flex",
    gap: 34,
    alignItems: 'center'
})
export const NotificationIcon = styled(Icon)({
    '& path': {
        stroke: 'var(--article-color)'
    }
})

export const UserLabel = styled(Label)({
    cursor: 'pointer'
})
export const StyledDivider = styled(Divider)({
    '&:last-child': {
        display: 'none'
    }
})

export const MenuContainer = styled('div')(() => ({
    padding: '10px 16px',
    display: "flex",
    alignItems: 'center',
    cursor: 'pointer',
    color: 'var(--text-color)'
}));