import React from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

import theme from "../../style/theme";


const loadKeyframes = keyframes`
    0%, 100% {
        height: 30px;
        background: white;
    }
    50% {
        height: 60px;
        margin-top: -15px;
        margin-bottom: -15px;
        background-color: ${theme.loadingIconColor};
    }
`;

const LoadingStyled = styled.div`
    position: relative;
    
    .loading-children {
        z-index: 1;
    }
    
    .loading-box {
        position: ${({fullscreen}) => fullscreen ? "fixed" : "absolute"};
        z-index: 2;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        
        .loading-icon {
            width: 80px;
            height: 30px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            
            span {
                display: inline-block;
                width: 8px;
                height: 100%;
                border-radius: 4px;
                background: white;
                margin-right: 8px;
                animation: ${loadKeyframes} 1s ease infinite;
            }
            span:nth-child(2) {
                animation-delay: 0.2s;
            }
            span:nth-child(3) {
                animation-delay: 0.4s;
            }
            span:nth-child(4) {
                animation-delay: 0.6s;
            }
            span:nth-child(5) {
                animation-delay: 0.8s;
                margin-right: 0;
            }
        }
    }
`;

function Loading(props) {
    
    const { children, isLoading, awaysShow } = props;

    return (
        <LoadingStyled fullscreen={!children}>
            {
                children && <div className="loading-children">{children}</div>
            }
            {
                (awaysShow || isLoading) && (
                    <div className="loading-box">
                        <div className="loading-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                )
            }
        </LoadingStyled>
    );
}
Loading.propTypes = {
    isLoading: PropTypes.bool,
    awaysShow: PropTypes.bool
};

Loading.service = function(options) {
    return new LoadingConstructor(options);
};

class LoadingConstructor {
    constructor(options) {
        const { fullscreen = true, container = "body", awaysShow = false } = options;

        this._fullscreen = fullscreen;
        this._awaysShow = awaysShow;
        
        if (typeof container === "string") {
            this._container = document.querySelector(container) || document.body;
        } else if (container instanceof HTMLElement) {
            this._container = container;
        }
    }

    _isOpen = false;

    open() {
        if (this._isOpen) return;

        this._loadingBox = document.createElement("div");
        this._container.appendChild(this._loadingBox);

        this._isOpen = true;

        ReactDOM.render(
            (
                <Loading awaysShow={this._awaysShow} fullscreen={this._fullscreen} />
            ),
            this._loadingBox
        );
    }

    close() {
        if (!this._isOpen) return;

        this._isOpen = false;

        ReactDOM.unmountComponentAtNode(this._loadingBox);
        this._container.removeChild(this._loadingBox);
    }
}

export default Loading;