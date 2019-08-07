import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import contextStorehouse from "../../context";

const { injectApp } = contextStorehouse.App;

const SessionMenuStyled = styled.header`
    position: relative;
    z-index: 2;
    width: 100vw;
    height: 1rem;
    
    & .menuItem {
        display: inline-block;
        float: left;
        padding: 0.5rem;
        
        & + .menuItem {
            margin-left: 0.5rem;
        }
    }
`;

class Menu extends React.PureComponent {
    static propTypes = {
        isInTransition: PropTypes.bool,
        index: PropTypes.number,
        routes: PropTypes.arrayOf(PropTypes.object),
        changeTransitionType: PropTypes.func
    };

    _handleClick = (index, preIndex) => {
        const { changeTransitionType } = this.props;

        if (index > preIndex) {
            changeTransitionType(2);
        } else if (index < preIndex) {
            changeTransitionType(1);
        } else {
            changeTransitionType(0);
        }
    };

    render() {
        const { isInTransition, index, AppContext, routes } = this.props;
        const { platform, isMobile } = AppContext;

        return (
            <SessionMenuStyled menuLength={routes.length} isInTransition={isInTransition} isMobile={isMobile} platform={platform}>
                <menu>
                    {
                        routes.map((route, i) => {
                            const { name, path } = route;
                            const _name = name.toLocaleLowerCase();
                            const isHome = _name === "home";

                            return (
                                <div className={`menuItem${isHome ? " home" : ""}`} key={path}>
                                    <NavLink
                                        to={path}
                                        onClick={() => this._handleClick(i, index)}
                                    >
                                        <FormattedMessage id={`HeaderMenu.${_name}`} />
                                    </NavLink>
                                </div>
                            );
                        })
                    }
                </menu>
            </SessionMenuStyled>
        );
    }
}

export default injectApp(withRouter(Menu));