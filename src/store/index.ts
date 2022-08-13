import {createStore, applyMiddleware, compose} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import {saveState} from './localStorage';

import rootReducers from './reducers';
import rootSagas from './sagas';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];

const composeEnhacers = compose;

const store = createStore(
  rootReducers,
  composeEnhacers(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSagas);

store.subscribe(() => {
  saveState({list: store.getState().list});
});

export default store;
