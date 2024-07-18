import {ISkuSpecLines} from "redux-store/api";

export const getSpecsCellValues = (unusedSpecLines?: Record<string, ISkuSpecLines>) => {
    const {fake_active, model, country} = unusedSpecLines || {};

    const mainSpecsString = [country?.value, model?.value].filter(Boolean).join(',');
    const fakeActionSpecValue = fake_active?.value;
    const hasFakeActive = !!fakeActionSpecValue;

    const isAllValuesEmpty = !mainSpecsString && !hasFakeActive;
    const additionalSpec = isAllValuesEmpty ? '-' : fakeActionSpecValue;

    return {mainSpecsString, additionalSpec};
}