import {Typography} from "@mui/material";
import {Cell, RowContainer, RowHeaderContainer, TableContainer} from "components/Table";
import {useTranslation} from "hocs/Localization";
import {
    CELLS_MIN_WIDTH,
    CELLS_WITHOUT_RIGHT_PADDING,
    COLUMN_WIDTHS,
    COLUMNS_DICT_KEY,
    FAKE_DATA,
    HEADER_CELLS_RIGHT_ALIGN
} from "./OrderTable.constants";

export const OrderTable = () => {
    const {translate} = useTranslation();

    return (
        <TableContainer>
            <RowHeaderContainer>
                {COLUMNS_DICT_KEY.map((dictKey, index) => (
                    <Cell key={dictKey} minWidth={CELLS_MIN_WIDTH[index]}
                          right={HEADER_CELLS_RIGHT_ALIGN[index]}
                          withoutRightPadding={CELLS_WITHOUT_RIGHT_PADDING[index]} width={COLUMN_WIDTHS[index]}>
                        <Typography variant={'caption'}>
                            {translate(dictKey)}
                        </Typography>
                    </Cell>
                ))}
            </RowHeaderContainer>
            <>
                {FAKE_DATA.map((data, index) => (
                    <RowContainer key={index}>
                        <Cell minWidth={CELLS_MIN_WIDTH[0]} withoutRightPadding={true} width={COLUMN_WIDTHS[0]}>
                            <Typography color={'var(--text-color)'} variant={'body14_400'}>
                                {index + 1}
                            </Typography>
                        </Cell>
                        <Cell whiteSpace={'normal'} width={COLUMN_WIDTHS[1]}>
                            <Typography variant={'body14_600'}>
                                {data.Product}
                            </Typography>
                        </Cell>
                        <Cell width={COLUMN_WIDTHS[2]}>
                            <Typography color={'var(--text-color)'} variant={'body14_400'}>
                                {data.Delivery}
                            </Typography>
                        </Cell>
                        <Cell right={'true'} width={COLUMN_WIDTHS[3]}>
                            <Typography variant={'body14_400'}>
                                {data.QTY}
                            </Typography>
                        </Cell>
                        <Cell right={'true'} width={COLUMN_WIDTHS[4]}>
                            <Typography variant={'body14_400'}>
                                {data.Price}
                            </Typography>
                        </Cell>
                        <Cell right={'true'} width={COLUMN_WIDTHS[5]}>
                            <Typography variant={'body14_400'}>
                                {data.Total}
                            </Typography>
                        </Cell>
                    </RowContainer>
                ))}
            </>
        </TableContainer>
    )
}