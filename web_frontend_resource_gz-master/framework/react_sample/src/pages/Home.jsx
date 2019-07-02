import React from "react";
import styled from "styled-components";

import contextStorehouse from "../context";
import { FormattedMessage } from "react-intl";

const { injectApp } = contextStorehouse.App;

const HomeContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


function Home(props) {
    const { AppContext } = props;
    const { appData } = AppContext;

    if (appData) {
        return (
            <HomeContainerStyled>
                <h1>{<FormattedMessage id="HeaderMenu.home" />}</h1>
            </HomeContainerStyled>
        );
    } else {
        return null;
    }
}

export default injectApp(Home);