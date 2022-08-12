import {createStore} from '@reduxjs/toolkit';

import logger from 'redux-logger';

import {loadState, saveState} from './localStorage';

import rootReducers from './reducers';

const store = createStore(rootReducers);

store.subscribe(() => {
  saveState({list: store.getState().list});
});

console.log(store.getState());

export default store;
