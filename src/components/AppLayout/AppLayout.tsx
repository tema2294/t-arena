import {Header} from "components/Header";
import {Navbar} from "components/Navbar";
import {RouterProvider} from "hocs/Router";
import React, {FC, PropsWithChildren} from "react";
import {useSelector} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {useSocket} from "redux-store/api";
import {selectIsUserLogged} from "redux-store/appState";
import {AppContainer, Content} from "./AppLayout.styles";

export const AppLayout: FC<PropsWithChildren> = () => {
    const isUserLogged = useSelector(selectIsUserLogged);

    useSocket();

    return (
        <AppContainer>
            <BrowserRouter>
                {isUserLogged && <Header/>}
                <Content>
                    {isUserLogged && <Navbar/>}
                    <RouterProvider/>
                </Content>
            </BrowserRouter>
        </AppContainer>
    )
}