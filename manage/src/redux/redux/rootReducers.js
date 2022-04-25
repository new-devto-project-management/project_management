import { combineReducers } from "redux";
import { usersReducer } from "./reducers";
const rootReducer = combineReducers({
  users: usersReducer,
});
export default rootReducer;
