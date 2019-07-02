import React from "react";
import { withRouter } from "react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import PropTypes from "prop-types";

import Menu from "../components/public/Menu";

const speed = 800;

const TransitionGroupStyled = styled(TransitionGroup)`
    & > .transitionContainer {
        position: absolute;
        z-index: 1;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        
        & > div:first-child {
            height: 100%;
        }
    }

    ${
        ({type}) => {
            let proto, enterValue, activeValue, exitValue;
            switch (type) {
                case 0: // fade
                    proto = "opacity";
                    enterValue = "0.01";
                    activeValue = "1";
                    exitValue = "0.01";
                    break;
                case 1: // transform left
                    proto = "transform";
                    enterValue = "translate3d(-100%, 0, 0)";
                    activeValue = "translate3d(0, 0, 0)";
                    exitValue = "translate3d(100%, 0, 0)";
                    break;
                case 2: // transform right
                    proto = "transform";
                    enterValue = "translate3d(100%, 0, 0)";
                    activeValue = "translate3d(0, 0, 0)";
                    exitValue = "translate3d(-100%, 0, 0)";
                    break;
                default: // fade
                    proto = "opacity";
                    enterValue = "0.01";
                    activeValue = "1";
                    exitValue = "0.01";
            }
            const styles = `
                & > .trainsition-enter {
                    ${proto}: ${enterValue};
                }
                & > .trainsition-enter-active {
                    ${proto}: ${activeValue};
                    transition: ${proto} ${speed}ms ease-in;
                }
                & > .trainsition-exit {
                    ${proto}: ${activeValue};
                }
                & > .trainsition-exit-active {
                    ${proto}: ${exitValue};
                    transition: ${proto} ${speed}ms ease-in;
                }
            `;
            return styles;
        }
        }
`;

class RouterTransition extends React.Component {
    static propTypes = {
        routes: PropTypes.arrayOf(PropTypes.object)
    };

    state = {
        isInTransition: false,
        transitionType: 0
    };

    _changeTransitionType = (type) => {
        this.setState({ transitionType: type });
    };

    _onEnter = (node, isAppearing) => {
        this.setState({ isInTransition: true });
    };

    _onExited = () => {
        this.setState({ isInTransition: false }, () => {
            this._changeTransitionType(0);
        });
    };

    render() {
        const { isInTransition, transitionType } = this.state;
        const { location, children, routes } = this.props;

        const index = routes.findIndex((item) => {
            return item.path === location.pathname;
        });

        return (
                <React.Fragment>
                    <Menu isInTransition={isInTransition} changeTransitionType={this._changeTransitionType} index={index} routes={routes} />

                    <TransitionGroupStyled className="transitionWrapper" type={transitionType}>
                        <CSSTransition
                                key={location.pathname}
                                timeout={speed}
                                classNames="trainsition"
                                onEnter={this._onEnter}
                                onExited={this._onExited}>
                            <div className="transitionContainer">
                                {
                                    React.cloneElement(children, { location })
                                }
                            </div>
                        </CSSTransition>
                    </TransitionGroupStyled>

                </React.Fragment>
        );
    }
}

export default withRouter(RouterTransition);