import {createContext, useContext} from "react";
import {TUseFilteredTableData} from "redux-store/api";


export const FilterDataContext = createContext({filteredData: {}} as TUseFilteredTableData);

export const useFilteredDataFromContext = (): TUseFilteredTableData => useContext(FilterDataContext)