import React from "react";
import styled from "styled-components";

import contextStorehouse from "../context";
import { FormattedMessage } from "react-intl";

const { injectApp } = contextStorehouse.App;

const ContactContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


function Contact(props) {
    const { AppContext } = props;
    const { appData } = AppContext;

    if (appData) {
        return (
            <ContactContainerStyled>
                <h1>{<FormattedMessage id="HeaderMenu.contact" />}</h1>
            </ContactContainerStyled>
        );
    } else {
        return null;
    }
}

export default injectApp(Contact);