import querystringify from "querystringify";
import config from "./config";
import Loading from "../components/public/Loading";
import Notification from "../components/public/Notification";
import { getLocaleData, getAppLanguage, serviceApiLangFormat } from "../i18n/utils";

const fetchLoading = Loading.service({ awaysShow: true });

function getMessage() {

    const localeMessage = getLocaleData().message;

    return {
        deleteConfirm: localeMessage["common.deleteConfirm"] || "Delete confirm?",
        calcen: localeMessage["common.cancel"] || "Cancel.",
        commonError: localeMessage["Error.commonError"] || "Error"
    };

}

function setHeader(myInit) {

    myInit.headers.append("Authorization", "");

}

function injectData(data) {

    const injectedData = data;
    const lang = serviceApiLangFormat(getAppLanguage());

    if (data instanceof FormData) {

        injectedData.append("language", lang);

    } else {

        injectedData["language"] = lang;

    }

    return injectedData;

}

function action(url, init) {

    function getNowTimesStamp() {

        return new Date().getTime();

    }

    function fetchEnd(startTimesStamp, endTimesStamp, timeInterval = 500) {

        const runningTime = endTimesStamp - startTimesStamp;
        const actualTimeInterval = timeInterval - runningTime;

        if (actualTimeInterval > 0) {

            setTimeout(() => {

                fetchLoading.close();

            }, actualTimeInterval);

        } else fetchLoading.close();

    }

    const startTimesStamp = getNowTimesStamp();

    fetchLoading.open();

    const myInit = new Request(url, init);

    return new Promise((resolve, reject) => {

        fetch(myInit).then(async d => {

            const endTimesStamp = getNowTimesStamp();

            fetchEnd(startTimesStamp, endTimesStamp);

            if (!d.ok) {

                Notification.error({
                    title: getMessage().commonError,
                    message: getMessage().commonError
                });

                reject();

            } else {

                const { status, message, detail } = await d.json();

                switch (status) {

                    case 0:
                        resolve(detail);
                        break;
                    case 999:
                        //
                        reject(message);
                        break;
                    default:
                        reject(message);

                }

            }

        }).catch(err => {

            const endTimesStamp = getNowTimesStamp();

            fetchEnd(startTimesStamp, endTimesStamp);

            reject(err);

        });

    });

}

function setRequest(u, data, method) {

    let url = u;

    if (!url.startsWith("http")) url = config.serviceUrl + url;

    const myInit = {
        method,
        headers: new Headers()
    };

    setHeader(myInit);

    const injectedData = injectData(data);

    if (method === "GET") url += `?${querystringify.stringify(injectedData)}`;
    else {

        let sendData;

        if (injectedData instanceof FormData) {

            sendData = injectedData;

        } else {

            myInit.headers.append("Content-Type", "application/json; charset=utf-8");
            sendData = JSON.stringify(injectedData);

        }
        myInit.body = sendData;

    }

    return action(url, myInit);

}

const fetchAction = {
    get: (url, data = {}) => setRequest(url, data, "GET"),

    post: (url, data) => setRequest(url, data, "POST"),

    put: (url, data) => setRequest(url, data, "PUT"),

    deleteItem: (url, data) => new Promise((res, rej) => {

        if (window.confirm(getMessage().deleteConfirm)) {

            res();

        } else {

            rej(getMessage().calcen);

        }

    }).then(() => setRequest(url, data, "DELETE"), rej => {

        throw rej;

    }).catch(err => {

        throw err;

    })
};

export default fetchAction;
