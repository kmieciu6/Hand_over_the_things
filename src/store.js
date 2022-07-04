import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./Redux/reduces"
import thunk from 'redux-thunk'
import logger from "redux-logger";

const middlewares = [logger, thunk];

export default createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);