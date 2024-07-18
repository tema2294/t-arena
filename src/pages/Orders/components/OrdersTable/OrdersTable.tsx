import {Typography} from "@mui/material";
import {Cell, RowContainer, RowHeaderContainer, TableContainer} from "components/Table";
import {useTranslation} from "hocs/Localization";
import {ERouterPath} from "hocs/Router/Router.constants";
import {useNavigate} from "react-router-dom";
import {COLUMN_WIDTHS, COLUMNS_DICT_KEY, FAKE_DATA, HEADER_CELLS_RIGHT_ALIGN} from "./OrdersTable.constants";
import {DateCell} from "./OrdersTable.styles";

export const OrdersTable = () => {
    const {translate} = useTranslation();
    const navigate = useNavigate();
    const handleNavigateToDetailPage = () => {
        navigate(`${ERouterPath.Orders}/140`)
    }

    return (
        <TableContainer>
            <RowHeaderContainer>
                {COLUMNS_DICT_KEY.map((dictKey, index) => (
                    <Cell key={dictKey} right={HEADER_CELLS_RIGHT_ALIGN[index]} width={COLUMN_WIDTHS[index]}>
                        <Typography variant={'caption'}>
                            {translate(dictKey)}
                        </Typography>
                    </Cell>
                ))}
            </RowHeaderContainer>
            <>
                {FAKE_DATA.map((data, index) => (
                    <RowContainer onClick={handleNavigateToDetailPage} key={index}>
                        <Cell width={COLUMN_WIDTHS[0]}>
                            <DateCell variant={'body14_400'}>
                                {data.Created}
                            </DateCell>
                        </Cell>
                        <Cell width={COLUMN_WIDTHS[1]}>
                            <Typography variant={'body14_600'}>
                                {data.Order}
                            </Typography>
                        </Cell>
                        <Cell width={COLUMN_WIDTHS[2]}>
                            <Typography variant={'body14_600'}>
                                {data.Market}
                            </Typography>
                        </Cell>
                        <Cell width={COLUMN_WIDTHS[3]}>
                            <Typography variant={'body14_400'}>
                                {data.Stage}
                            </Typography>
                        </Cell>
                        <Cell width={COLUMN_WIDTHS[4]}>
                            <Typography variant={'body14_400'}>
                                {data.Ship_date}
                            </Typography>
                        </Cell>
                        <Cell right={'true'} width={COLUMN_WIDTHS[5]}>
                            <Typography variant={'body14_400'}>
                                {data.QTY}
                            </Typography>
                        </Cell>
                        <Cell right={'true'} width={COLUMN_WIDTHS[6]}>
                            <Typography variant={'body14_400'}>
                                {data.Total}
                            </Typography>
                        </Cell>
                        <Cell width={COLUMN_WIDTHS[7]}>
                            -
                        </Cell>
                    </RowContainer>
                ))}
            </>
        </TableContainer>
    )
}