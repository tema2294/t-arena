import {Typography} from "@mui/material";
import {PageContainer} from "components/PageContainer";
import React from "react";
import {EDictionaryKey, useTranslation} from "../../hocs/Localization";
import {ReportTable} from "./components";
import {CurrencyTypography, HeaderColumn, PageHeaderContainer} from "./Report.styles";

export const Report = () => {
    const {translate} = useTranslation();

    return (
        <PageContainer>
            <PageHeaderContainer>
                <HeaderColumn>
                    <Typography variant={'h1'}>
                        {translate(EDictionaryKey.Report)}
                    </Typography>
                    <Typography variant={'pageSubtitle'}>
                        860 items · Total amount $2,184,084 · Total amount 200 084₽
                    </Typography>
                </HeaderColumn>
                <CurrencyTypography variant={'body500'}>
                    <span>USD/RUB</span>
                    <span>89.16</span>
                </CurrencyTypography>
            </PageHeaderContainer>
            <ReportTable/>
        </PageContainer>
    )
}