import {LoginRedirect} from "components/LoginRedirect";
import {Home} from "pages/Home";
import {Login} from "pages/Login";
import {OrderDetail} from "pages/OrderDetail";
import {Orders} from "pages/Orders";
import {Report} from "pages/Report";
import {ERouterPath, ERouteUnauthorizedPath} from "./Router.constants";

export const authorized_router = [
    {
        path: ERouterPath.Home,
        element: <Home/>,
    },
    {
        path: ERouterPath.Report,
        element: <Report/>,
    },
    {
        path: ERouterPath.Orders,
        element: <Orders/>,
    },
    {
        path: ERouterPath.OrdersDetail,
        element: <OrderDetail/>,
    },
];

export const unauthorized_router = [
    {
        path: ERouteUnauthorizedPath.Login,
        element: <Login/>,
    },
    {
        path: '*',
        element: <LoginRedirect/>,
    },
];
