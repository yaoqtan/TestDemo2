import config from "../utils/config";
import { getLanguage } from "../utils/utils";

const localeMessagePath = "locale";

function getLanguageMap(languages, path) {
    const languageMap = {};
    Object.keys(languages).forEach(key => {
        const name = languages[key];
        languageMap[key] = {
            name,
            locale: require(`./${path}/${key}`).default
        };
    });

    return languageMap;
}

export const languageMap = getLanguageMap(config.languageSet, localeMessagePath);

function browserLanguageFormat(lang) {
    const [ country, region ] = lang.split("-");

    if (!region || region === "cn" || country === "en") return country;

    if (country === "zh") return "zh-hk";

    return lang;
}

export function getAppLanguage() {
    return browserLanguageFormat(getLanguage());
}

export function getLocaleData(language = getAppLanguage(), langs = languageMap) {
    const lang = language;
    const langMap = langs;
    const localeMessage = langMap[lang];
    const locale = localeMessage ? lang : "en";
    const message = langMap[locale].locale;

    return {
        locale,
        message
    };
}

export function serviceApiLangFormat(lang) {
    switch(lang) {
        case "en":
            return "en";
        case "zh":
            return "sc";
        case "zh-hk":
            return "tc";
        default:
            return "en";
    }
}