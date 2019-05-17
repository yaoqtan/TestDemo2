import lang from './../i18n/';
export function language() {
    const href = location.pathname.toLocaleLowerCase();
    let lang = href.indexOf('zh_cn/') >=0 ?'sc':href.indexOf('en/') >=0?'en':'tc';
    return lang

}

export function jsonData() {
    return lang[language()]
}





