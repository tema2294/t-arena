import {Typography} from "@mui/material";
import {Cell, RowContainer, RowHeaderContainer, TableContainer} from "components/Table";
import {useTranslation} from "hocs/Localization";
import {COLUMN_WIDTHS, COLUMNS_DICT_KEY, FAKE_DATA, HEADER_CELLS_RIGHT_ALIGN} from "./ReportTable.constants";
import {DateCell} from "./ReportTable.styles";

export const ReportTable = () => {
    const {translate} = useTranslation();

    return (
        <TableContainer>
            <RowHeaderContainer>
                {COLUMNS_DICT_KEY.map((dictKey, index) => (
                    <Cell key={dictKey} right={`${HEADER_CELLS_RIGHT_ALIGN[index]}`} width={COLUMN_WIDTHS[index]}>
                        <Typography variant={'caption'}>
                            {translate(dictKey)}
                        </Typography>
                    </Cell>
                ))}
            </RowHeaderContainer>
            <>
                {FAKE_DATA.map((data, index) => (
                    <RowContainer key={index}>
                        <Cell width={COLUMN_WIDTHS[0]}>
                            <DateCell variant={'body14_400'}>
                                {data.Created}
                            </DateCell>
                        </Cell>
                        <Cell width={COLUMN_WIDTHS[1]}>
                            <Typography variant={'body14_600'}>
                                {data.Market}
                            </Typography>
                        </Cell>
                        <Cell width={COLUMN_WIDTHS[2]}>
                            <Typography variant={'body14_600'}>
                                {data.Product}
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