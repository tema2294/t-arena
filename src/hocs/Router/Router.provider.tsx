import React, {FC, PropsWithChildren} from "react";
import {useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";
import {selectIsUserLogged} from "redux-store/appState";
import {authorized_router, unauthorized_router} from "./Router.components";

export const RouterProvider: FC<PropsWithChildren> = () => {
    const isUserLogged = useSelector(selectIsUserLogged);
    const routesList = isUserLogged ? authorized_router : unauthorized_router;

    return (<Routes>
        {routesList.map((routeProps) => <Route key={routeProps.path} {...routeProps} />)}
    </Routes>)
}