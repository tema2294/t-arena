import {styled, Typography} from "@mui/material";
import {Icon} from "components/Icon";
import {PageContainer} from "components/PageContainer";

export const HomeContainer = styled(PageContainer)(() => ({
    gap: 16,
    padding: 0
}))
export const HomePageWrapper = styled('div')(() => ({
    display: "flex",
    height: '100%',
    width: '100%',
    position: 'relative',
    gap: 24,
}));

export const PageHeader = styled('div')(({theme}) => ({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 0 3px',
}))

export const HeaderInfo = styled('div')(({theme}) => ({
    display: 'flex',
    width: 'fit-content',
    gap: 12,
    alignItems: 'center',
}))

export const IconButton = styled(Icon)(({theme}) => ({
    padding: '10px',
    boxSizing: 'content-box',
    color: 'var(--text-color)',
}))


export const CurrencyTypography = styled(Typography)(({theme}) => ({
    fontSize: 14
}))