import React, {ReactElement} from "react";
import {Provider} from "react-redux";
import {store} from "../redux/store";
import {AppRouter} from "../app-router/App-Router";

export const App = (): ReactElement => (
    <>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </>
)