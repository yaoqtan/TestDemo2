
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import App from './App';
import RullpageReact from './FullpageReact';
import Translate from './i18n/Translate';
import JqTest from './jq/JqTest';
import FormTest from './form/FormTest';
import Todo from './todo/Todo';
import Counter from './counter';
import Async from './async';
import Scroll from './Scroll/Scroll';

import paths from './path'

const Routers = (props) => (
    <div role="main" className="main-container">
        <Switch>
            <Route exact path={paths.root.path} component= { App } />
            <Route exact path={paths.app.path} component= { App } />
            <Route exact path={paths.fullpage.path} component= { RullpageReact } />
            <Route exact path={paths.i18nTest.path} component= { Translate } />
            <Route exact path={paths.jqTest.path} component= { JqTest } />
            <Route exact path={paths.form.path} component= { FormTest} />
            <Route exact path={paths.todo.path} component= { Todo} />
            <Route exact path={paths.counter.path} component= { Counter} />
            <Route exact path={paths.async.path} component= { Async} />
            <Route exact path={paths.scroll.path} component= { Scroll} />

            <Route path="/template/*.*" />
            <Route path="/images/*.*" />

            <Redirect to={paths.root.path} />
        </Switch>
    </div>
);

export default Routers


