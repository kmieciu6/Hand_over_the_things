export const ADD = 'ADD';

export const addUser = ({ email, password }) => ({
  type: ADD,
  payload: {
    email,
    password,
  }
});

