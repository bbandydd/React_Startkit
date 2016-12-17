import { createStore, combineReducers } from 'redux';

import counterReducer from '../reducers/counterReducer';

const rootReducer = combineReducers({
    counterReducer
})

export default createStore(rootReducer, window.devToolsExtension ? window.devToolsExtension() : undefined);