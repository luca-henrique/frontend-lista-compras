import {call, put} from '@redux-saga/core/effects';

import {services} from '../../service';
import {Creators} from '../actions/list';

export function* getImageRequest(action) {
  try {
    const image = yield call(services.getImages, 'example');
  } catch (error) {}
}
