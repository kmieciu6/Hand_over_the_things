import {
  ADD
} from '../actions/appActions';

export const appReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    default:
      console.warn(`Nie mamy akcji typu: ${action.type}`);
      return state;
  }
}