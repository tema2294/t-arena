import {ERouterPath} from "hocs/Router";
import {PropsWithChildren} from "react";

export interface IButtonBackProps extends PropsWithChildren {
    to: ERouterPath
}