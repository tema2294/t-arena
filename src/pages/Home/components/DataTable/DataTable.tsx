import {TableContainer} from "components/Table";
import {useFilteredDataFromContext} from "hocs/FilterDataContext";
import {CSSProperties, useMemo} from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import {TTableData} from "redux-store/api";
import {selectSearchFilter} from "redux-store/appState";
import {useAppSelector} from "redux-store/hooks";
import {HeaderRow} from "../HeaderRow";
import {Row} from "../Row";
import {TableState} from "../TableState";
import {CELL_HEIGHT, HEADER_ROW_HEIGHT} from "./DataTable.constants";
import {AUTO_SIZER_STYLES, Table, TableContainer as OldContainer} from "./DataTable.styles";
import {getEmptyStatusProps} from "./DataTable.tools";

export const DataTable = () => {
    const {filteredData, isInitialDataEmpty, isFilteredDataEmpty} = useFilteredDataFromContext();
    const searchFilter = useAppSelector(selectSearchFilter);
    const {iconName, title, subtitleFunction} = getEmptyStatusProps({isInitialDataEmpty, isFilteredDataEmpty});
    const hasEmptyStatus = !!iconName;
    const subtitle = subtitleFunction?.(searchFilter) || '';
    const filteredDataList = useMemo(() => Object.values(filteredData), [filteredData]);

    return (
        <OldContainer>
            <AutoSizer style={AUTO_SIZER_STYLES[`${hasEmptyStatus}`]}>
                {({height}) => {
                    const dataHeight = filteredDataList.length * CELL_HEIGHT;
                    const fullTableHeight = dataHeight + HEADER_ROW_HEIGHT;
                    const isDataOverflow = fullTableHeight > height;
                    const containerHeight = (isDataOverflow || hasEmptyStatus) ? '100%' : fullTableHeight;
                    const tableStyles = {'overflowY': isDataOverflow ? 'scroll' : 'hidden'} as CSSProperties;

                    return (
                        hasEmptyStatus ?
                            <TableState iconName={iconName} title={title} subtitle={subtitle}/>
                            :
                            <TableContainer style={{height: containerHeight}}>
                                <HeaderRow/>
                                <Table
                                    style={tableStyles}
                                    height={dataHeight}
                                    data={filteredDataList}
                                    itemContent={(index, item) => <Row key={index} data={item as TTableData}/>}
                                />
                            </TableContainer>
                    )
                }}
            </AutoSizer>
        </OldContainer>
    );

}
