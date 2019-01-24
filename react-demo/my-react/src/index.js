import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Start from './Start';
import registerServiceWorker from './registerServiceWorker';
import FullpageReact from './FullpageReact';

import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import TestApp from './rootReducer'

const middleware = [thunk];
if(process.env.NODE_ENV !== 'production'){
    middleware.push(createLogger());
}


const store = createStore(TestApp,applyMiddleware(...middleware));
console.log(store.getState());
/*路由*/
{/*</>*/}
ReactDOM.render(
    <Provider store={store}>
        <Start/>
    </Provider>,
    document.getElementById('root')

);
registerServiceWorker();
