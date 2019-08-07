import { createGlobalStyle } from "styled-components";
import theme from "./theme";
import "./media";
// import { mediaOnly, mediaMin } from "./media";
// import { isIe, isWindows } from "../utils/utils";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    html, body {
        -webkit-tap-highlight-color: transparent;
        touch-action: manipulation;
    }

    body {
        color: ${theme.fontColor};
        font-family: ${theme.fontFamily};
        font-size: ${theme.fontSize};
        line-height: 1.2;
        text-align: left;
        background: ${theme.backgroundColor};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;        
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    
    fieldset, img {
        vertical-align: top;
        max-width: 100%;
    }
    
    ol, ul {
        list-style: none;
    }
    
    input, textarea, select {
        font-family: inherit;
        font-size: ${theme.fontSize};
        font-style: inherit;
        -webkit-appearance: none;
    }
    
    em, i {
        font-style: inherit;
    }
    
    a {
        text-decoration: none;
    }

    .clearfix:after {
        visibility: hidden;
        font-size: 0;
        display: block;
        height: 0;
        clear: both;
        content: "";
    }    
`;

export default GlobalStyle;