import {Icon} from "components/Icon";
import {EDictionaryKey, useTranslation} from "hocs/Localization";
import {useDebouncedState} from "hooks/use-debounced-state";
import React, {ChangeEvent, useEffect, useState} from "react";
import {selectSearchFilter, setSearchFilter} from "redux-store/appState";
import {useAppDispatch, useAppSelector} from "redux-store/hooks";
import {IconButton, SearchFilterInput, SearchInputContainer} from "./SearchFilter.styles";

export const SearchFilter = () => {
    const {translate} = useTranslation();
    const filterValue = useAppSelector(selectSearchFilter);
    const dispatch = useAppDispatch();
    const inputName = translate(EDictionaryKey.Search);
    const [intermediateFilterValue, setIntermediateFilterValue] = useState(filterValue)
    const [debounceFilterValue, setDebounceFilterValue] = useDebouncedState(filterValue);

    const hasValue = intermediateFilterValue.length > 0;
    const handleFilterChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setIntermediateFilterValue(event.target?.value)
        setDebounceFilterValue(event.target?.value)
    }

    const clearSearchFilter = () => {
        setIntermediateFilterValue('')
        setDebounceFilterValue('')
        dispatch(setSearchFilter(''))
    }

    useEffect(() => {
        dispatch(setSearchFilter(debounceFilterValue))
    }, [debounceFilterValue]);

    return <SearchInputContainer>
        <Icon name={'Search'}/>
        <SearchFilterInput value={intermediateFilterValue} onChange={handleFilterChange} name={inputName}
                           placeholder={inputName}/>
        <IconButton show={+hasValue} activeCursor={true} onClick={clearSearchFilter} name={'SearchInputCross'}/>
    </SearchInputContainer>
}