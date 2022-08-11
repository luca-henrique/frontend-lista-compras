import {Types} from '../actions/list';

import {createSelector} from 'reselect';

const INITIAL_STATE = {
  items: [],
  list: {},
  total: 0,
};

export default function list(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_PRODUCT_REQUEST:
      return {
        list: action.list,
        items: [
          ...state.items,
          {...action.product, total: getItemTotal(action.product)},
        ],
      };

    case Types.DELETE_PRODUCT_REQUEST: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    }

    default:
      return state;
  }
}

function getItemTotal(product) {
  return product.price * product.quantity;
}

export const getListTotal = createSelector(
  (state) => state.list.items,
  (items) => items.reduce((total, item) => total + item.total, 0),
);
