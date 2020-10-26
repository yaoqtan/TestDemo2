import {createStore,applyMiddleware,compose} from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'

import mySagas from './sagas'

const sagaMiddleware = createSagaMiddleware();

const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPONSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPONSE__({}):compose
    
const enhancer = componseEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(reducer,enhancer)

sagaMiddleware.run(mySagas)

export default store



// redux-thunk start
// import {createStore,applyMiddleware,compose} from 'redux'
// import reducer from './reducer'
// import thunk from 'redux-thunk'

// const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPONSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPONSE__({}):compose
    
// const enhancer = componseEnhancers(applyMiddleware(thunk))

// const store = createStore(reducer,enhancer)

// export default store

//redux-thunk end