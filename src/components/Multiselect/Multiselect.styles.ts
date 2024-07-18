import {Menu, styled, Typography} from "@mui/material";
import {Icon} from "components/Icon";

const BADGE_OFFSET = 8;
export const MultiselectMenu = styled(Menu)(({theme}) => ({
    marginTop: '4px',

    '& .MuiPaper-root': {
        borderRadius: 8,
        minWidth: '190px',
        background: 'var(--dropdown-bg-color)',
    },
    '& .MuiList-root': {
        display: 'flex',
        flexDirection: 'column',
    }
}))
export const SelectContainer = styled('div')<{ open: boolean }>(({theme, open}) => ({
        height: '36px',
        position: 'relative',
        display: 'flex',
        cursor: 'pointer',
        width: 'fit-content',
        whiteSpace: 'nowrap',
        gap: 6,
        borderRadius: 8,
        padding: '6px 12px',
        marginRight: BADGE_OFFSET,
        alignItems: 'center',
        color: 'var(--btn-default-color)',
        background: 'var(--btn-default-bg-color)',

        '&:hover': {
            background: 'var(--btn-default-bg-hover-color)',
        },

        ...(open && {
            background: 'var(--btn-primary-bg-color)',
            color: 'var(--btn-default-active-color)',
        }),

    }
));
export const DropdownIcon = styled(Icon)<{ open: boolean }>(({theme, open}) => ({
    transition: '0.6s',

    ...(open && {
        transform: 'rotateX(180deg)',
    })
}))

export const ResetButton = styled(Icon)(({theme}) => ({
    cursor: 'pointer'
}))

export const ListTitle = styled(Typography)(({theme}) => ({
    padding: '8px 20px',
}))


export const ListContainer = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column'
}))

export const Badge = styled(Typography)<{ open: boolean }>(({theme, open}) => ({
    display: 'flex',
    padding: '0 5px',
    minWidth: '18px',
    height: 16,
    width: 'fit-content',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '7px',
    position: 'absolute',
    right: `-${BADGE_OFFSET}px`,
    top: `-${BADGE_OFFSET}px`,
    fontSize: '11px',
    fontWeight: '600',
    background: 'var(--chip-filter-default-bg)',
    color: 'var(--chip-filter-default-color)',


    ...(open && {
        background: 'var(--chip-filter-active-bg)',
        color: 'var(--chip-filter-active-color)',
        boxShadow: '0px 0px 0px 1px #FFF',
    })
}));

