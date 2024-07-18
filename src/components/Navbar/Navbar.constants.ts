import {TIconName} from "components/Icon";
import {EDictionaryKey} from "hocs/Localization/index";
import {ERouterPath} from "hocs/Router";

export const NAVIGATION_LIST: { url: string, iconName: TIconName, textKey: EDictionaryKey }[] = [
    {
        url: ERouterPath.Home,
        iconName: 'ShoppingCart',
        textKey: EDictionaryKey.Marketplace
    },
    {
        url: ERouterPath.Report,
        iconName: 'Document',
        textKey: EDictionaryKey.Report
    },
    {
        url: ERouterPath.Orders,
        iconName: 'Container',
        textKey: EDictionaryKey.Orders
    },
]