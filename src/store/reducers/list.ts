import {Types} from '../actions/list';

const INITIAL_STATE = {
  items: [],
  list: {},
};

export default function list(state = INITIAL_STATE, action) {
  console.log(action);

  switch (action.type) {
    case Types.ADD_PRODUCT_REQUEST:
      return {
        list: action.list,
        items: [...state.items, action.product],
      };

    default:
      return state;
  }
}
