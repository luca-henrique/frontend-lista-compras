import {createStore} from '@reduxjs/toolkit';

import logger from 'redux-logger';

import rootReducers from './reducers';

const store = createStore(rootReducers);

export default store;
