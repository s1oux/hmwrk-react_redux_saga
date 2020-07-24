import { put, takeEvery, all } from 'redux-saga/effects';

import * as userService from '../services/userService';

import {
  SET_USERS_COUNT,
  GET_USERS_COUNT,
  GET_USERS,
  USERS_RECEIVED,
  GET_USER,
  USER_RECEIVED,
  ADD_USER,
  USER_ADDED,
  EDIT_USER,
  USER_EDITED,
  DELETE_USER,
  USER_DELETED,
  LOGIN_USER,
  USER_LOGGED,
  SET_ERROR,
} from '../actions/userActionTypes';

export function* getUsers() {
  const users = yield userService.getUsers();
  yield put({ type: USERS_RECEIVED, users });
}

export function* getUsersCount() {
  const users = yield userService.getUsers();
  yield put({ type: SET_USERS_COUNT, count: users.length });
}

function* getUser({ id }) {
  const user = yield userService.getUser(id);
  yield put({ type: USER_RECEIVED, user });
}

function* addUser({ userToAdd }) {
  const response = yield userService.registerUser(userToAdd);
  if (response.error) {
    yield put({ type: SET_ERROR, error: response.error });
  } else {
    yield put({ type: USER_ADDED, user: response });
  }
}

function* editUser({ userToEdit }) {
  const user = yield userService.editUser(userToEdit);
  yield put({ type: USER_EDITED, user });
}

function* deleteUser({ id }) {
  const user = yield userService.deleteUser(id);
  yield put({ type: USER_DELETED, user });
}

function* loginUser({ userToLogin }) {
  const response = yield userService.login(userToLogin);
  if (response.error) {
    yield put({ type: SET_ERROR, error: response.error });
  } else {
    yield put({ type: USER_LOGGED, user: response });
  }
}

function* getUsersWatcher() {
  yield takeEvery(GET_USERS, getUsers);
}

function* getUsersCountWatcher() {
  yield takeEvery(GET_USERS_COUNT, getUsersCount);
}

function* getUserWatcher() {
  yield takeEvery(GET_USER, getUser);
}

function* addUserWatcher() {
  yield takeEvery(ADD_USER, addUser);
}

function* editUserWatcher() {
  yield takeEvery(EDIT_USER, editUser);
}

function* deleteUserWatcher() {
  yield takeEvery(DELETE_USER, deleteUser);
}

function* loginUserWatcher() {
  yield takeEvery(LOGIN_USER, loginUser);
}

export default function* rootSaga() {
  yield all([
    getUsersWatcher(),
    getUsersCountWatcher(),
    getUserWatcher(),
    addUserWatcher(),
    editUserWatcher(),
    deleteUserWatcher(),
    loginUserWatcher(),
  ]);
}
