import {Types} from '../actions/form';

const INITIAL_STATE = {
  action: 'new',
  product: {},
  list: '',
};

export default function form(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.UPDATE_PRODUCT_REQUEST:
      return {
        action: 'update',
        product: action.product,
        list: action.list,
      };

    case Types.UPDATE_PRODUCT_SUCCESS:
      return {
        ...INITIAL_STATE,
      };

    default:
      return state;
  }
}
