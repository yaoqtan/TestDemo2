import "./utils/polyfill";
import React from "react";
import ReactDOM from "react-dom";

import ErrorBoundary from "./components/public/ErrorBoundary";
import IntlProviderComponent from "./i18n";
import contextStorehouse from "./context";
import App from "./App";
import { isMobile, getPlatform } from "./utils/utils";
import * as serviceWorker from "./serviceWorker";
// import { setFontSize } from "./utils/utils";
// import config from "./utils/config";

const { ProviderApp } = contextStorehouse.App;

// setFontSize(config.designSize);

const appContext = {
    isMobile: isMobile(),
    platform: getPlatform(),
    appData: {}
};

ReactDOM.render(
        (
                <ErrorBoundary>
                    <ProviderApp value={appContext}>
                        <IntlProviderComponent>
                            <App />
                        </IntlProviderComponent>
                    </ProviderApp>
                </ErrorBoundary>
        ),
        document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();