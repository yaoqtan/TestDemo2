import React, { Component } from 'react';
import { Router } from "react-router-dom";
import Routers from './router';
import history from "./history";


class Start extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router history={history}>
                <Routers/>
            </Router>
        );
    }
}

export default Start;
