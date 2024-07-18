import {InputBase, styled} from "@mui/material";
import {Icon} from "components/Icon";

export const SearchFilterInput = styled(InputBase)(({theme}) => ({
    width: '100%',

    '& .MuiInputBase-input': {
        padding: '8px 0',
        height: '20px',
        width: '100%',
    }
}))

export const IconButton = styled(Icon)<{ show: number }>(({theme, show}) => ({
    ...(show
        ? {
            opacity: 1,
            visibility: 'visible',
            transition: 'opacity 0.3s, visibility 0.3s',
        }
        : {
            opacity: 0,
            visibility: 'hidden',
            transition: 'opacity 0.3s, visibility 0.3s',
        }),
}))

export const SearchInputContainer = styled('div')(({theme}) => ({
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    maxWidth: 450,
    width: '100%',
    padding: '0 12px',
    borderRadius: 9,
    background: 'var(--field-bg-color)',

    '&:hover': {
        background: 'var(--btn-default-bg-hover-color)',
    },

    '& *': {
        cursor: 'pointer',
    },

}))

