import {Types} from '../actions/form';

const INITIAL_STATE = {
  action: 'new',
  product: {},
};

export default function form(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.UPDATE_PRODUCT_REQUEST:
      return {
        action: 'update',
        product: action.product,
      };

    default:
      return state;
  }
}
