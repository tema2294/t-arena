import {styled,} from "@mui/material";
import {CSSProperties} from "react";
import {Virtuoso,} from "react-virtuoso";


export const TableContainer = styled('div')(({theme}) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
}))


export const Table = styled(Virtuoso)(({theme}) => ({
    height: `100%`,

    '&::-webkit-scrollbar-track': {
        backgroundColor: 'var(--table-bg-color)',
    },
}))


// keys = has Empty Status , value = styles
export const AUTO_SIZER_STYLES: Record<string, CSSProperties> = {
    true: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    false: {
        height: '100%',
        width: '100%',
    }
};