export const ADDLOG = 'ADDLOG';
export const DELETELOG = 'DELETELOG';

export const logUser = ({ email, password }) => ({
  type: ADDLOG,
  payload: {
    email,
    password,
  }
});

export const deleteLog = email => ({
  type: DELETELOG,
  payload: {
    email,
  }
});