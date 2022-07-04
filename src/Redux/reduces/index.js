import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { logReducer } from './logReducer';
import { stuffReducer } from './stuffReducer';

export default combineReducers({
    app: appReducer,
    log: logReducer,
    stuff: stuffReducer
})

