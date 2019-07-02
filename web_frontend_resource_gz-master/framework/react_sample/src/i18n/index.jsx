import React from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import "intl";
import en from "react-intl/locale-data/en";
import zh from "react-intl/locale-data/zh";
import { getAppLanguage, getLocaleData, languageMap } from "./utils";
import { setLanguage } from "../utils/utils";
import contextStorehouse from "../context";
import AppServices from "../services";

import Notification from "./../components/public/Notification";

const { injectApp } = contextStorehouse.App;
const { ProviderMyIntl } = contextStorehouse.MyIntl;

addLocaleData([
    ...en,
    ...zh
]);

class IntlProviderComponent extends React.Component {
    state = {
        lang: getAppLanguage()
    };

    changeLanguage = (lang) => {
        const { changeContext } = this.props.AppContext;
        const { message }=getLocaleData(lang, languageMap);
        this.setState({ lang }, () => {
            setLanguage(lang);
            AppServices.getAppData().then(res => {
                changeContext("appData", res.home);
            }).catch(err=>{
                Notification.error({
                    title: message['Error.commonError'],
                    message: message['Error.commonError'],
                });
            });
        });
    };

    render() {
        const { lang } = this.state;
        const { children } = this.props;

        const { locale, message } = getLocaleData(lang, languageMap);
        return (
            <IntlProvider locale={locale} messages={message}>
                <ProviderMyIntl value={{ changeLanguage: this.changeLanguage }}>
                    {children}
                </ProviderMyIntl>
            </IntlProvider>
        );
    }
}

export default injectApp(IntlProviderComponent);