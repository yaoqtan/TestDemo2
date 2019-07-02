import config from "./config";

export function throttle(fn, duration = 160) {

    let timer;
    let start = new Date().getTime();

    return function(...args) {

        const context = this;
        const current = new Date().getTime();

        clearTimeout(timer);
        if (current - start >= duration) {

            fn.apply(context, args);
            start = current;

        } else {

            timer = setTimeout(() => {

                fn.apply(context, args);

            }, duration);

        }

    };

}

export function debounce(fn, duration = 160) {

    let timer;

    return function(...args) {

        clearTimeout(timer);

        const context = this;

        timer = setTimeout(() => {

            fn.apply(context, args);

        }, duration);

    };

}

export function isOnlyMobile() {

    return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Nokia/i.test(navigator.userAgent);

}

export function isMobile() {

    // return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Nokia/i.test(navigator.userAgent);
    return isOnlyMobile() || /iPad/i.test(navigator.userAgent);

}

export function isIe() {

    return "ActiveXObject" in window;

}

export function isFirefox() {

    return /Firefox/i.test(navigator.userAgent);

}

export function isWindows() {

    return /windows|win32/i.test(navigator.userAgent);

}

export function getPlatform() {

    const size = window.innerWidth;
    const platformSize = config.minPlatformSize || {
        desktop: 1280,
        tablet: 750,
        mobile: 300
    };

    const [platform] = Object.keys(platformSize).filter(key => platformSize[key] < size).map(key => ({ key, value: platformSize[key] })).sort((a, b) => b.value - a.value);

    return (platform && platform.key) || "mobile";

}

export function getBrowserLanguage() {

    return navigator.language.toLowerCase();

}

export function getLanguage() {

    return localStorage.getItem("lang") || getBrowserLanguage();

}

export function setLanguage(lang) {

    const language = lang || getBrowserLanguage();

    localStorage.setItem("lang", language);

}

// 设置html font-size,用于rem
export function setFontSize(designSize) {

    const { mobile, tablet, desktop } = designSize;

    const docEl = document.documentElement;

    const resizeEvt = "orientationchange" in window ? "orientationchange" : "resize";

    const recalc = () => {

        const { clientWidth } = docEl;

        if (clientWidth === undefined) return;

        let size;

        switch (true) {

            case clientWidth < 768:
                size = mobile || tablet || desktop || designSize;
                break;
            case clientWidth <= 1024:
                size = tablet || desktop || designSize;
                break;
            default:
                size = desktop || designSize;

        }

        docEl.style.fontSize = `${100 * (clientWidth / size)}px`;

    };

    if (document.addEventListener === undefined) return;

    window.addEventListener(resizeEvt, recalc, false);

    document.addEventListener("DOMContentLoaded", recalc, false);

    recalc();

}

export function isEmail(text) {

    const reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,5}$/;

    return reg.test(text);

}

export function preloadImg(imgList = []) {

    const PromiseList = [];

    imgList.forEach((src, i) => {

        PromiseList[i] = new Promise((reslove) => {

            const img = new Image();

            img.onload = img.onerror = img.onabort = img.oncancel = () => {

                reslove();

            };

            img.src = src;

        });

    });

    return Promise.all(PromiseList);

}
