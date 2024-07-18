import {createOption, Select} from "components/Select";
import React from "react";
import {ISelectOption, useGetCurrenciesQuery} from "redux-store/api";
import {selectCurrency, setCurrency} from "redux-store/appState";
import {useAppDispatch, useAppSelector} from "redux-store/hooks";

export const CurrencySelect = () => {
    const currentCurrency = useAppSelector(selectCurrency);
    const dispatch = useAppDispatch();
    const {data: currencyData = {}, isLoading} = useGetCurrenciesQuery();
    const options = Object.keys(currencyData || {}).map((currencyName) => createOption(currencyName, `USD/${currencyName}`));

    const value = createOption(currentCurrency, `USD/${currentCurrency}`);
    const {name} = value;
    const currencyRatio = currencyData[currentCurrency];

    const handleSetValue = (value: ISelectOption) => {
        dispatch(setCurrency(value?.id))
    }

    if (isLoading) return null;

    return (
        <Select isHoverMode={true} options={options} name={`${name} ${currencyRatio}`} value={value}
                handleChange={handleSetValue}/>
    )
}