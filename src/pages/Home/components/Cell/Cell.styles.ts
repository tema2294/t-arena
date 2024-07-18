import {styled, Typography} from "@mui/material";
import {Icon} from "components/Icon";
import {Select} from "components/Select";
import {Cell} from "components/Table";


export const ChipsCell = styled(Cell)({
    gap: 4,
    width: 'fit-content',
})

export const CurrencySelect = styled(Select)({
    padding: '0'
})

export const CurrencyTypography = styled(Typography)(({theme}) => ({
    fontSize: 14,
    lineHeight: "20px",
    width: 45,
}))

export const NameCell = styled(Cell)({
    flexGrow: 2,
    flexShrink: 2,
})


export const CurrencyCell = styled(Cell)({
    gap: 12,
    maxWidth: 183,
    minWidth: 183,
})


export const SortingIcon = styled(Icon)<{ open: boolean }>(({theme, open}) => ({
    transition: '0.6s',
    ...(open && {
        transform: 'rotateX(180deg)',
    })
}))
