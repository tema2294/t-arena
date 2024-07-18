import {Button, Modal as MUIModal, styled, Typography} from "@mui/material";

export const MODAL_PADDING = '32px';
export const ModalContainer = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    width: 480,
    padding: `${MODAL_PADDING} 0px`,
    gap: 24,
    background: 'var(--bg-color)',
    outline: 'none',
    borderRadius: 16,
    position: 'relative'
}))
export const TitleContainer = styled('div')(({theme}) => ({
    display: 'flex',
    gap: 4,
    padding: `0px ${MODAL_PADDING}`,
    alignItems: 'flex-start',
    justifyContent: 'space-between'
}))
export const TitleTextContainer = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
}))

export const SelectWrapper = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
}))

export const MainContent = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
    padding: `0px ${MODAL_PADDING}`,
}))

export const Modal = styled(MUIModal)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}))

export const SelectInput = styled('input')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '60px',
    color: 'var(--article-color)',
    padding: '8px 12px',
    border: 'none',
    borderLeft: `1px solid var(--bg-color)`,
    borderRight: `1px solid var(--bg-color)`,
    textAlign: 'center',
    outline: 'none',
    height: 44,
    justifyContent: 'center',
    background: 'var(--field-bg-color)',
    flex: 1,
    MozAppearance: 'textfield',
    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
        margin: 0
    }
}))

export const SelectContainer = styled('div')(({theme}) => ({
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

    '& path': {
        fill: 'var(--article-color)'
    }
}))

export const SelectButton = styled('div')(({theme}) => ({
    width: 44,
    height: 44,
    padding: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    background: 'var(--field-bg-color)',
    '&:first-of-type': {
        borderRadius: '8px 0px 0px 8px',
    },
    '&:last-child': {
        borderRadius: '0px 8px 8px 0px',
    }
}))
export const SelectDescription = styled(Typography)(({theme}) => ({
    color: '#8FA0B2',
    fontWeight: 400,
    fontSize: 14,
    width: "100%",
    textAlign: 'left',
    userSelect: 'none'
}))


export const Subtitle = styled(Typography)(({theme}) => ({
    fontSize: '14px',
    color: 'var(--text-color)',
}))
export const Title = styled(Typography)(({theme}) => ({
    fontSize: '18px',
    fontWeight: 600
}))

export const CalculateRow = styled('div')(({theme}) => ({
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: 18,
}))

export const ResultContainer = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
}))
export const CalculateTitle = styled(Typography)(({theme}) => ({
    fontSize: 16,
    fontWeight: 600,
}))

export const CalculateResult = styled(CalculateTitle)(({theme}) => ({
    fontWeight: 500,
}))
export const CalculateResultDescription = styled(Typography)(({theme}) => ({
    fontWeight: 400,
}))

export const Reminder = styled(Typography)(({theme}) => ({
    fontWeight: 400,
}))

export const CalculateResultContainer = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'end',
}))


export const ActionButton = styled(Button)(({theme}) => ({
    padding: '12px 20px',
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '24px',
    color: 'var(--btn-primary-color)',
    background: 'var(--btn-primary-bg-color)',
    borderRadius: 9,
    textTransform: 'none',
    boxShadow: '0px 1px 2px 0px rgba(18, 25, 38, 0.05)',

    '&:hover': {
        background: 'var(--btn-primary-bg-hover-color)',
    },
}))