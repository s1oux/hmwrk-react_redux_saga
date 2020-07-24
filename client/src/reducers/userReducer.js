import {
  SET_USERS_COUNT,
  GET_USERS_COUNT,
  GET_USERS,
  USERS_RECEIVED,
  GET_USER,
  USER_RECEIVED,
  ADD_USER,
  USER_ADDED,
  SELECT_USER_TO_EDIT,
  EDIT_USER,
  USER_EDITED,
  DELETE_USER,
  USER_DELETED,
  LOGIN_USER,
  USER_LOGGED,
  SET_ERROR,
} from '../actions/userActionTypes';

export default (state = { isAuthenticated: false }, action) => {
  switch (action.type) {
    case SET_USERS_COUNT:
      return {
        ...state,
        usersInChat: action.count,
      };
    case GET_USERS:
    case GET_USERS_COUNT:
    case GET_USER:
    case ADD_USER:
    case EDIT_USER:
    case DELETE_USER:
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
      };
    case SELECT_USER_TO_EDIT:
      return {
        ...state,
        userOnEdit: action.userOnEdit,
      };
    case USERS_RECEIVED:
      return {
        ...state,
        users: action.users,
        loading: false,
      };
    case USER_RECEIVED:
      return {
        ...state,
        user: action.user,
        loading: false,
      };
    case USER_ADDED:
      return {
        ...state,
        users: [...state.users, action.user],
        loading: false,
        error: undefined,
      };
    case USER_EDITED:
      const updatedUsers = state.users.map((user) => {
        if (user._id === action.user._id) {
          return action.user;
        }
        return user;
      });
      return {
        ...state,
        users: [...updatedUsers],
        userOnEdit: undefined,
        loading: false,
      };
    case USER_DELETED:
      return {
        ...state,
        users: [...state.users.filter((user) => user._id !== action.user._id)],
        loading: false,
      };
    case USER_LOGGED:
      return {
        ...state,
        isAuthenticated: true,
        authenticatedUser: action.user,
        loading: false,
        error: undefined,
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
