import * as type from "./actionTypes";

const initialState = {
  users: [],
  user: {},
  loading: true,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.getUsers:
      return { ...state, users: action.payload, loading: false };
    case type.deleteUser:
      return { ...state, loading: false };
    default:
      return state;
  }
};
export { usersReducer };
