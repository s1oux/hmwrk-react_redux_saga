import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import messageReducer from './reducers/messageReducer';
import userReducer from './reducers/userReducer';

import userSaga from './sagas/userSaga';
import messageSaga from './sagas/messageSaga';

const initialState = {};

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const composedEnhancers = compose(
  composeWithDevTools(applyMiddleware(...middlewares))
);

const reducers = {
  user: userReducer,
  messages: messageReducer,
};

const rootReducer = combineReducers({
  ...reducers,
});

const store = createStore(rootReducer, initialState, composedEnhancers);
sagaMiddleware.run(userSaga);
sagaMiddleware.run(messageSaga);

export default store;
