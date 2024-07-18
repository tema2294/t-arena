import {Menu, styled, Typography} from "@mui/material";
import {Icon} from "components/Icon";


export const SelectMenu = styled(Menu)(({theme}) => ({
    marginTop: '4px',

    '& .MuiPaper-root': {
        borderRadius: 8,
        minWidth: '130px',
        background: 'var(--dropdown-bg-color)',
    },
    '& .MuiList-root': {
        display: 'flex',
        flexDirection: 'column',
    }
}))
export const SelectContainer = styled('div')<{
    hasPadding?: boolean,
    hoverMode?: boolean,
    filled?: boolean,
    open?: boolean
}>(({
        theme,
        hasPadding,
        open,
        hoverMode,
        filled
    }) => ({
        display: 'flex',
        cursor: 'pointer',
        width: 'fit-content',
        gap: 6,
        padding: hasPadding ? '6px 12px' : 'none',
        alignItems: 'center',

        ...(filled && {
            background: 'var(--btn-default-bg-color)',
        }),

        ...(hoverMode && {
            borderRadius: 9,

            '&:hover': {
                background: 'var(--btn-default-bg-hover-color)',
            },

            ...(open && {
                background: 'var(--btn-primary-bg-color)',

                color: 'var(--btn-default-active-color)',
            }),

        })
    }
));
export const DropdownIcon = styled(Icon)<{ open: boolean }>(({theme, open}) => ({
    transition: '0.6s',

    '& path': {
        stroke: 'var(--text-color)'
    },
    
    ...(open && {
        transform: 'rotateX(180deg)',
    })
}))

export const ListContainer = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column'
}))
export const MenuItem = styled(Typography)(({theme}) => ({
    padding: '8px 24px',
    display: 'flex',
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',

    '&:hover': {
        background: 'var(--dropdown-bg-hover-color)',
    }
}))

