import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

const NotFoundStyled = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    
    .NotFoundView {
        text-align: center;
        padding: 0 0.4rem;
        margin: 0 auto;
        
        h2 {
          white-space: pre-wrap;
          font-size: 0.42rem;
          margin-bottom: 0.2rem;
          line-height: 0.54rem;
          text-transform: uppercase;
        }
        
        p {
            font-size: 0.24rem;
            line-height: 0.4rem;
            padding: 0 0.2rem;
            color: #fff;
            margin-bottom: 0.2rem;
        }
    }

    .footer {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
    }
`;

 function NotFound(props) {
    return (
        <NotFoundStyled>
            <div className="NotFoundView narrow-container">
                <h2><FormattedMessage id="NotFoundView.title" /></h2>
                <p><FormattedMessage id="NotFoundView.intro" /></p>

                <a href="#/home"><FormattedMessage id="NotFoundView.home" /></a>
            </div>
        </NotFoundStyled>
    );
}
export default NotFound;