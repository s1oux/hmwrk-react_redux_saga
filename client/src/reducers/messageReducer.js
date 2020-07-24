import {
  SET_EDIT_MESSAGE,
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

export default (state = {}, action) => {
  switch (action.type) {
    case SET_EDIT_MESSAGE:
      return {
        ...state,
        messageOnEdit: action.message,
      };
    case TOGGLE_LIKE_MESSAGE:
    case GET_MESSAGES:
    case ADD_MESSAGE:
    case EDIT_MESSAGE:
    case DELETE_MESSAGE:
      return {
        ...state,
        loading: true,
      };
    case MESSAGES_RECEIVED:
      return {
        ...state,
        messages: [...action.messages],
        lastMessageDate: action.messages[
          action.messages.length - 1
        ].createdAt.toLocaleTimeString(),
        loading: false,
      };
    case MESSAGE_ADDED:
      return {
        ...state,
        messages: [...state.messages, action.message],
        lastMessage: action.message.createdAt.toLocaleTimeString(),
        loading: false,
      };
    case MESSAGE_EDITED:
      const updMessages = state.messages.map((message) => {
        if (message._id === action.message._id) {
          return action.message;
        }
        return message;
      });
      return {
        ...state,
        messages: [...updMessages],
        loading: false,
      };
    case MESSAGE_DELETED:
      const updatedMessages = state.messages.filter(
        (message) => message._id !== action.message._id
      );
      return {
        ...state,
        messages: [...updatedMessages],
        lastMessageDate: updatedMessages[
          updatedMessages.length - 1
        ].createdAt.toLocaleTimeString(),
        loading: false,
      };
    default:
      return state;
  }
};
