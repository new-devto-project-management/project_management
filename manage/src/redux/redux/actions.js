import * as type from "./actionTypes";
import axios from "axios";
const getUsers = (users) => ({ type: type.getUsers, payload: users });
const deletedUser = () => ({ type: type.deleteUser });
const addedUser = () => ({ type: type.ADDUSER });
export const getUsersDispatch = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}`);
      dispatch(getUsers(data));
    } catch (error) {
      console.error(error);
    }
  };
};
export const removeUser = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API}/${id}`);
      dispatch(deletedUser());
    } catch (error) {
      console.error(error);
    }
  };
};
export const addUser = (user) => {
  return async (dispatch) => {
    try {
      await axios.post(`${process.env.REACT_APP_API}`, user);
      dispatch(addedUser());
      dispatch(getUsers());
    } catch (error) {
      console.error(error);
    }
  };
};
