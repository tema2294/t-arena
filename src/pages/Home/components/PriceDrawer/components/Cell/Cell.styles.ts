import {styled, Typography} from "@mui/material";


export const HeaderCell = styled(Typography)(({theme}) => ({
    display: "flex",
    flexShrink: 0,
    flexGrow: 0,
    padding: '12px 16px',
    fontSize: 13,
    fontWeight: 600,
    lineHeight: '16px'
}));

export const AdditionalHeaderCell = styled(HeaderCell)(({theme}) => ({
    justifyContent: 'flex-end'
}))

export const Cell = styled('div')(({theme}) => ({
    display: "flex",
    flexDirection: 'column',
    minWidth: 0,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '8px 16px',
    flexShrink: 0,
    flexGrow: 0,
    textAlign: 'end',
    whiteSpace: 'nowrap',
    gap: 0,

    '& span': {
        display: 'inline-block',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '100%'
    }
}))


export const AdditionalCell = styled(Cell)(({theme}) => ({
    alignItems: 'flex-end'
}))
export const LastCell = styled(Cell)(({theme}) => ({
    padding: '7px 16px 7px 0',
}))


export const TableContainer = styled('div')(({theme}) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 8,
    border: `1px solid var(--table-item-border)`,
    overflowX: 'hidden',
}))

export const EmptyTableContainer = styled('div')(({theme}) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    borderRadius: 8,
    background: 'var(--table-bg-color)',
    border: `1px solid var(--table-item-border)`,
    padding: '32px 0',
    alignItems: 'center',
    justifyContent: 'center',
}))

export const TableHeader = styled(Typography)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '24px',
}));
export const FilterBar = styled('div')(({theme}) => ({
    display: 'flex',
    gap: 16,
}));

export const FilterContainer = styled('div')(({theme}) => ({
    display: 'flex',
    gap: 8,
}));
export const TableWrapper = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
}));


