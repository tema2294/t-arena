import {styled} from "@mui/material";

export const RowContainer = styled('div')(({theme}) => ({
    display: 'flex',
    cursor: 'pointer',
    width: '100%',
    background: 'var(--table-bg-color)',
    borderBottom: `1px solid var(--table-item-border)`,

    '&:last-child': {
        border: 'none'
    },
    '&:hover': {
        background: 'var(--table-bg-hover-color)',
    },
}))

export const RowHeaderContainer = styled('div')(({theme}) => ({
    display: 'flex',
    width: '100%',
    background: 'var(--table-header-bg-color)',
}))

export const TableContainer = styled('div')<{ fullHeight?: boolean }>(({theme, fullHeight}) => ({
    display: 'flex',
    width: '100%',
    borderRadius: 9,
    overflow: 'hidden',
    flexDirection: 'column',
    border: `1px solid var(--table-item-border)`,
    height: 'fit-content',
    ...(fullHeight && {
        height: '100%'
    }),
}))
export const Cell = styled('div')<{
    right?: string | boolean,
    width?: string,
    minWidth?: number | string,
    whiteSpace?: string,
    withoutRightPadding?: boolean
}>(({
        theme,
        right,
        width,
        withoutRightPadding,
        minWidth,
        whiteSpace
    }) => ({
    overflow: 'hidden',
    whiteSpace: whiteSpace || 'nowrap',
    textOverflow: 'ellipsis',
    padding: '12px 16px',
    display: "flex",
    gap: 16,
    alignItems: 'center',
    minWidth: minWidth || 0,

    ...(withoutRightPadding && {
        paddingRight: 0,
    }),
    ...(width && {
        width: width,
    }),
    ...(right && {
        justifyContent: 'flex-end'
    })
}))
