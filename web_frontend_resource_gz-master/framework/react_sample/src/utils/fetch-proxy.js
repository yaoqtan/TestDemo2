import querystringify from "querystringify";
import config from "./config";
import Loading from "../components/public/Loading";
// import Notification from "../components/public/Notification";
import { getLocaleData, getAppLanguage, serviceApiLangFormat } from "../i18n/utils";

const fetchLoading = Loading.service({ awaysShow: true });

const fetchAction = {};

fetchAction.get = (url, data) => {
    return setRequest(url, data, "GET");
};

fetchAction.post = (url, data) => {
    return setRequest(url, data, "POST");
};

fetchAction.put = (url, data) => {
    return setRequest(url, data, "PUT");
};

fetchAction.deleteItem = (url, data) => {
    return new Promise((res, rej) => {
        if (window.confirm(getMessage().deleteConfirm))
            res();
        else
            rej(getMessage().cancel);
    }).then(res => {
        return setRequest(url, data, "DELETE");
    }, rej => {
        throw rej;
    }).catch(err => {
        throw err;
    });
};

function setHeader(myInit) {
    const headers = new Headers();
    // headers.append("Authorization", "");
    myInit.headers = headers;
}

function injectData(data = {}) {
    const injectedData = data;
    const lang = serviceApiLangFormat(getAppLanguage());

    if (data instanceof FormData) {
        injectedData.append("language", lang);
    } else {
        injectedData["language"] = lang;
    }

    return injectedData;
}

function setRequest(url, data, method) {
    if (!url.startsWith("http")) url = config.serviceUrl + url;

    const myInit = {
        method
    };

    setHeader(myInit);

    const injectedData = injectData(data);

    if (method === "GET") {
        url += `?${querystringify.stringify(injectedData)}`;
    } else {
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
        } else {
            fetchLoading.close();
        }
    }

    const startTimesStamp = getNowTimesStamp();
    fetchLoading.open();

    const myInit = new Request(url, init);
    return new Promise((resolve, reject) => {
        fetch(myInit).then(async d => {
            const endTimesStamp = getNowTimesStamp();
            fetchEnd(startTimesStamp, endTimesStamp);

            if (!d.ok) {
               /* Notification.error({
                    title: getMessage().commonError,
                    message: getMessage().commonError
                });*/
                reject();
            } else {
                // const { status, message, detail } = await d.json();
                // switch (status) {
                //     case 0:
                //         resolve(detail);
                //         break;
                //     case 999:
                //         //
                //         reject(message);
                //         break;
                //     default:
                //         reject(message);
                // }
                const response = await d.json();
                resolve(response);
            }
        }).catch(err => {
            const endTimesStamp = getNowTimesStamp();
            fetchEnd(startTimesStamp, endTimesStamp);

            reject(err);
        });
    });
}

function getMessage() {
    const localeMessage = getLocaleData().message;

    return {
        deleteConfirm: localeMessage["common.deleteConfirm"] || "Delete confirm?",
        cancel: localeMessage["common.cancel"] || "Cancel.",
        commonError: localeMessage["Error.commonError"] || "Error"
    };
}

export default fetchAction;