import React from "react";
import { Route, Redirect, Switch, HashRouter as Router } from "react-router-dom";
import RouterTransition from "./RoutingTransition";

import NotFound from "../components/public/NotFound";
import routes from "./routes";
import contextStorehouse from "../context";

const { injectApp } = contextStorehouse.App;


function RouterLayout(props) {
    const { ...ownProps } = props;

    return (
            <Router>
                <RouterTransition {...ownProps} routes={routes}>
                    <Switch>
                        {
                            routes.map((route, i) => {
                                return (
                                        <Route path={route.path} key={i} render={
                                            (props) => (
                                                    <route.component exact routes={route.routes} {...props} />
                                            )
                                        } />
                                );
                            })
                        }

                        <Route exact path="/" render={() => (<Redirect to={{ pathname: "/home" }}/>)}></Route>
                        <Route component={NotFound}/>

                    </Switch>
                </RouterTransition>
            </Router>
    );
}

export default injectApp(RouterLayout);