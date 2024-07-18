import {Typography} from "@mui/material";
import {Loader} from "components/Loader";
import {FilterDataContext} from "hocs/FilterDataContext";
import {EDictionaryKey, useTranslation} from "hocs/Localization";
import {useFilteredTableData} from "hooks/use-filtered-table-data";
import React from "react";
import {useGetCombineDataQuery} from "redux-store/api";
import {DataTable, FiltersBar} from "./components";
import {CurrencySelect} from "./components/CurrencySelect";
import {OrderModal} from "./components/OrderModal";
import {PriceDrawer} from "./components/PriceDrawer";
import {HeaderInfo, HomeContainer, HomePageWrapper, IconButton, PageHeader} from "./Home.styles";

export const Home = () => {
    const {translate} = useTranslation();

    const {isLoading} = useGetCombineDataQuery();
    const isDataLoaded = !isLoading;
    const filteredContextValue = useFilteredTableData();

    return <HomePageWrapper>
        <FilterDataContext.Provider value={filteredContextValue}>
            <HomeContainer data-testid={'444'}>
                <Loader isLoading={isLoading}/>
                {isDataLoaded && <>
                    <PageHeader>
                        <Typography variant={'h1'}>
                            {translate(EDictionaryKey.Marketplace)}
                        </Typography>
                        <HeaderInfo>
                            <CurrencySelect/>
                            <IconButton activeCursor={true} name={'FileDownload'}/>
                            <IconButton activeCursor={true} name={'Upload'}/>
                        </HeaderInfo>
                    </PageHeader>
                    <FiltersBar/>
                    <DataTable/>
                    <OrderModal/>
                </>
                }
            </HomeContainer>
            <PriceDrawer/>
        </FilterDataContext.Provider>
    </HomePageWrapper>
}