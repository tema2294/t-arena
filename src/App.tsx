import {AppLayout} from "components/AppLayout";
import {LocalizationProvider} from "hocs/Localization";
import {ThemeProvider} from "hocs/Theme";
import React from "react";
import {Provider} from "react-redux";
import {store} from "redux-store/store";

export const App = () => {

    return (
        <Provider store={store}>
            <LocalizationProvider>
                <ThemeProvider>
                    <AppLayout/>
                </ThemeProvider>
            </LocalizationProvider>
        </Provider>
    )
};


