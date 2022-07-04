import {
    ADDLOG, DELETELOG
} from '../actions/logActions';

export const logReducer = (states = [], action) => {
    switch (action.type) {
        case ADDLOG:
            return [...states, action.payload];
        case DELETELOG:
            return states = [];
        default:
            console.warn(`Nie mamy akcji typu: ${action.type}`);
            return states;
    }
}