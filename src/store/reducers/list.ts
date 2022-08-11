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
          {
            ...action.product,
            total: getItemTotal(action.product),
            checked: false,
          },
        ],
      };

    case Types.DELETE_PRODUCT_REQUEST: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    }

    case Types.TOGGLE_PRODUCT:
      return {
        ...state,
        items: toggleItem(state.items, action.id),
      };

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

function toggleItem(items, id) {
  const index = items.findIndex((item) => item.id === id);

  return [
    ...items.slice(0, index), // todos os items antes do item que vai ser modiciado
    {...items[index], checked: !items[index].checked}, // item que vai ser modificado
    ...items.slice(index + 1), // todos os items depois do que foi modificiado
  ];
}
