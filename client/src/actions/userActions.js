import {
  GET_USERS_COUNT,
  GET_USERS,
  GET_USER,
  ADD_USER,
  EDIT_USER,
  SELECT_USER_TO_EDIT,
  DELETE_USER,
  LOGIN_USER,
} from '../actions/userActionTypes';

export const getUsersCount = () => ({
  type: GET_USERS_COUNT,
});

export const getUsers = () => ({
  type: GET_USERS,
});

export const getUser = (id) => ({
  type: GET_USER,
  id,
});

export const addUser = (user) => ({
  type: ADD_USER,
  userToAdd: user,
});

export const editUser = (user) => ({
  type: EDIT_USER,
  userToEdit: user,
});

export const selectUserOnEdit = (user) => ({
  type: SELECT_USER_TO_EDIT,
  userOnEdit: user,
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  id: id,
});

export const loginUser = (user) => ({
  type: LOGIN_USER,
  userToLogin: user,
});
