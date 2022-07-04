import {
    ADDStuff, EditStuff,
} from '../actions/stuffActions';

export const stuffReducer = (store = [], action) => {
    switch (action.type) {
        case ADDStuff:
            return [store, action.payload];
        case EditStuff:
            const { quantity, stuff, people, location, organization, adress, time } = action.payload;
            return ({
                quantity,
                stuff,
                people,
                location,
                organization,
                adress,
                time,
            });
        default:
            console.warn(`Nie mamy akcji typu: ${action.type}`);
            return store;
    }
}