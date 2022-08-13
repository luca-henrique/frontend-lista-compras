import {call, put} from '@redux-saga/core/effects';

import {services} from '../../service';
import {Creators} from '../actions/list';

const imgDefault =
  'https://content.paodeacucar.com/wp-content/uploads/2019/06/8-dicas-%C3%BAteis-2.jpg';

export function* getImageRequest(action) {
  try {
    console.log(action);
    const image = yield call(services.getImages, action.product.productName);

    yield put(Creators.getImageSuccess(action.product, image));
  } catch (error) {
    yield put(Creators.getImageFail(action.product, imgDefault));
  }
}
