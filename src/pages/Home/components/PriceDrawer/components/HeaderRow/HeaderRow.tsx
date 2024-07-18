import {useLocalization} from "hocs/Localization";
import {useMemo} from "react";
import {AdditionalHeaderCell, CELLS_CSS, HeaderCell} from "../Cell";
import {HeaderRowWrapper} from "../Row";
import {TITLES_OBJECT} from "./HeaderRow.constants";

export const HeaderRow = () => {
    const {language} = useLocalization();
    const TITLES_LIST = useMemo(() => TITLES_OBJECT[language], [language]);


    return <HeaderRowWrapper>
        <HeaderCell variant={'subtitle1'} style={CELLS_CSS[0]}>
            {TITLES_LIST[0]}
        </HeaderCell>
        <HeaderCell variant={'subtitle1'} style={CELLS_CSS[1]}>
            {TITLES_LIST[1]}
        </HeaderCell>
        <AdditionalHeaderCell variant={'subtitle1'} style={CELLS_CSS[2]}>
            {TITLES_LIST[2]}
        </AdditionalHeaderCell>
        <AdditionalHeaderCell variant={'subtitle1'} style={CELLS_CSS[3]}>
            {TITLES_LIST[3]}
        </AdditionalHeaderCell>
    </HeaderRowWrapper>
}