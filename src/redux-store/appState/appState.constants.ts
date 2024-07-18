import {ECurrency} from "constants/index";
import {LOCAL_STORAGE_KEYS} from "constants/localStorageKeys";
import {constructLSItem} from "tools/local-storage";
import {IAppState} from "./appState.types";

const hasRefreshToken = constructLSItem(LOCAL_STORAGE_KEYS.refresh_token).getIsValueDefined();
const hasAccessToken = constructLSItem(LOCAL_STORAGE_KEYS.access_token).getIsValueDefined();

export const initialState: IAppState = {
    isLogged: hasAccessToken || hasRefreshToken,
    tableFilters: {},
    currency: ECurrency.RUB,
    mainTableCurrency: ECurrency.USD,
}
