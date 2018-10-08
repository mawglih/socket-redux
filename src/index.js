import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import reducer from 'reducers';
import createSagaMiddleware from 'redux-saga';
import Socket from 'containers/Socket';

const logger = store => {
  return next => {
    return action => {
      console.log('[Midlleware] dispatching', action);
      next(action);
    }
  }
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,
  composeEnhancer(
    applyMiddleware(
      sagaMiddleware,
      logger,
    )
  )
);


ReactDOM.render(
  <Provider store={store}>
    <Socket />
  </Provider>
  , document.getElementById('root'));
