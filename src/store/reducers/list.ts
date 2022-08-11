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

    case Types.UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
        list: action.list,
        items: updateProduct(state.items, action.product),
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

export const getOpenedItems = createSelector(
  (state) => state.list.items,
  (items) => items.filter((item) => !item.checked).length,
);

export const getClosedItems = createSelector(
  (state) => state.list.items,
  (items) => items.filter((item) => item.checked).length,
);

function toggleItem(items, id) {
  const index = items.findIndex((item) => item.id === id);

  return [
    ...items.slice(0, index), // todos os items antes do item que vai ser modiciado
    {...items[index], checked: !items[index].checked}, // item que vai ser modificado
    ...items.slice(index + 1), // todos os items depois do que foi modificiado
  ];
}

function updateProduct(items, product) {
  const index = items.findIndex((item) => item.id === product.id);

  return [
    ...items.slice(0, index), // todos os items antes do item que vai ser modiciado
    {...product, total: getItemTotal(product)}, // item que vai ser modificado
    ...items.slice(index + 1), // todos os items depois do que foi modificiado
  ];
}
