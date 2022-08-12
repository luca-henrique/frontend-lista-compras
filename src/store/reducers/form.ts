import {Types} from '../actions/form';

const INITIAL_STATE = {
  action: '',
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

    case Types.CREATE_PRODUCT_REQUEST:
      return {
        ...state,
        action: 'new',
        list: action.list,
      };

    case Types.CREATE_PRODUCT_SUCCESS:
      return {
        ...INITIAL_STATE,
      };

    default:
      return state;
  }
}
