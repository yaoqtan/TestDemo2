import { css } from "styled-components";
import config from "../utils/config";

const sizes = config.minPlatformSize;

const platformList = Object.keys(sizes).sort((pre, cur) => {
    return sizes[pre] - sizes[cur];
});

function createMedia(type) {
    return platformList.reduce((acc, label, index, arr) => {
        const nextLabel = arr[index + 1];
        const curSize = sizes[label];
        const nextSize = sizes[nextLabel];
        const minScreen = `(min-width: ${curSize}px)`;
        const maxScreen = nextSize && `(max-width: ${nextSize}px)`;

        let screen;
        switch(type) {
            case "only":
                screen = [minScreen, maxScreen].filter(item => item).join(" and ");
                break;
            case "min":
                screen = minScreen;
                break;
            case "max":
                screen = maxScreen || "screen";
                break;
            default:
                screen = maxScreen || "screen";
        }
    
        acc[label] = (...args) => css`
            @media ${screen} {
                ${css(...args)}
            }
        `;
    
        return acc;
    }, {});
}

export const mediaOnly = createMedia("only");

export const mediaMin = createMedia("min");

export const mediaMax = createMedia("max");