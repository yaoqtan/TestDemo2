import React from "react";
import { injectIntl } from "react-intl";
import initReactFastclick from 'react-fastclick';

import RouterLayout from "./routes/index";
import GlobalStyle from "./style";
import FontsStyle from "./style/fonts";
import { getPlatform, debounce } from "./utils/utils";
import AppServices from "./services";
import contextStorehouse from "./context";
import Notification from "./components/public/Notification";
import Loading from "./components/public/Loading";
const { injectApp } = contextStorehouse.App;


class App extends React.Component {
    state = {
        landingLoaded: false,
        isAppReady: false
    };

    speed = 1000;

    componentDidMount() {
        this.addListener();
        this.getAppData();
    }

    getAppData = () => {
        const { AppContext, intl } = this.props;
        const { changeContext } = AppContext;
        const { formatMessage } = intl;

        AppServices.getAppData().then(res => {
            changeContext("appData", res.home, (name, value) => {
                setTimeout(() => {
                    this.appBecomeReady();
                }, this.speed);
            });
        }).catch(err => {
            Notification.error({
                title: formatMessage({ id: "Error.commonError" }),
                message: formatMessage({ id: "Error.commonError" })
            });
        });
    };

    addListener = () => {
        const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
        window.addEventListener(resizeEvt, this.windowResizeHandle);
    };

    windowResizeHandle = () => {
        this.debounceResize();
    };

    debounceResize = debounce(() => {
        const { changeContext, platform } = this.props.AppContext;
        const newPlatform = getPlatform();

        newPlatform !== platform && changeContext("platform", newPlatform);
    });

    appBecomeReady = () => {
        this.setState({ isAppReady: true });
    };

    constructor(props) {
        super(props);
        initReactFastclick();
    }

    render() {
        const { landingLoaded, isAppReady } = this.state;

        return (
                <React.Fragment>
                    {
                        isAppReady ? <RouterLayout /> : <Loading isLoading={landingLoaded} />
                    }
                    <FontsStyle />
                    <GlobalStyle />
                </React.Fragment>
        );
    }
}

export default injectIntl(injectApp(App));