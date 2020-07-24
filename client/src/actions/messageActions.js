import {
  SET_EDIT_MESSAGE,
  GET_MESSAGES,
  ADD_MESSAGE,
  EDIT_MESSAGE,
  DELETE_MESSAGE,
  GET_MESSAGE,
  TOGGLE_LIKE_MESSAGE,
} from '../actions/messageActionTypes';

export const setEditMessageAction = (message) => ({
  type: SET_EDIT_MESSAGE,
  message: message,
});

export const getMessages = () => ({
  type: GET_MESSAGES,
});

export const getMessage = (id) => ({
  type: GET_MESSAGE,
  id: id,
});

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  messageToAdd: message,
});

export const editMessage = (message) => ({
  type: EDIT_MESSAGE,
  messageToEdit: message,
});

export const deleteMessage = (id) => ({
  type: DELETE_MESSAGE,
  id: id,
});

export const toggleLikeMessage = ({ userId, messageId }) => ({
  type: TOGGLE_LIKE_MESSAGE,
  userId: userId,
  messageId: messageId,
});
