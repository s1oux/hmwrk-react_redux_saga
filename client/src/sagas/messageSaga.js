import { put, takeEvery, all } from 'redux-saga/effects';

import * as messageService from '../services/messageService';
import {
  processMessagesInitData,
  convertDatePropToDateType,
} from '../controllers/messageController';

import {
  GET_MESSAGES,
  MESSAGES_RECEIVED,
  ADD_MESSAGE,
  MESSAGE_ADDED,
  EDIT_MESSAGE,
  MESSAGE_EDITED,
  DELETE_MESSAGE,
  MESSAGE_DELETED,
  TOGGLE_LIKE_MESSAGE,
} from '../actions/messageActionTypes';

export function* getMessages() {
  const messages = yield messageService.getMessages();
  yield put({
    type: MESSAGES_RECEIVED,
    messages: processMessagesInitData(messages),
  });
}

function* addMessage({ messageToAdd }) {
  const message = yield messageService.addMessage(messageToAdd);
  yield put({
    type: MESSAGE_ADDED,
    message: convertDatePropToDateType(message),
  });
}

function* editMessage({ messageToEdit }) {
  const message = yield messageService.editMessage(messageToEdit);
  yield put({
    type: MESSAGE_EDITED,
    message: convertDatePropToDateType(message),
  });
}

function* deleteMessage({ id }) {
  const message = yield messageService.deleteMessage(id);
  yield put({ type: MESSAGE_DELETED, message });
}

function* toggleLikeMessage({ userId, messageId }) {
  const message = yield messageService.toggleLikeMessage({ userId, messageId });
  yield put({
    type: MESSAGE_EDITED,
    message: convertDatePropToDateType(message),
  });
}

function* getMessagesWatcher() {
  yield takeEvery(GET_MESSAGES, getMessages);
}

function* addMessageWatcher() {
  yield takeEvery(ADD_MESSAGE, addMessage);
}

function* editMessageWatcher() {
  yield takeEvery(EDIT_MESSAGE, editMessage);
}

function* deleteMessageWatcher() {
  yield takeEvery(DELETE_MESSAGE, deleteMessage);
}

function* toggleLikeMessageWatcher() {
  yield takeEvery(TOGGLE_LIKE_MESSAGE, toggleLikeMessage);
}

export default function* rootSaga() {
  yield all([
    getMessagesWatcher(),
    addMessageWatcher(),
    editMessageWatcher(),
    deleteMessageWatcher(),
    toggleLikeMessageWatcher(),
  ]);
}
