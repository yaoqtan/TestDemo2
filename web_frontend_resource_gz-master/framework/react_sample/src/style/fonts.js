import { createGlobalStyle } from "styled-components";
import RobotoRegular from "../assets/fonts/Roboto-Regular.woff";

const FontsStyle = createGlobalStyle`
    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        src: url(${RobotoRegular}) format("woff");
        unicode-range: U+00-FF;
        font-display: auto;
        
    }
`;

export default FontsStyle;