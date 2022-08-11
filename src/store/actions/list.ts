export const Types = {
  ADD_PRODUCT_REQUEST: 'list/ADD_PRODUCT_REQUEST',
  DELETE_PRODUCT_REQUEST: 'list/DELETE_PRODUCT_REQUEST',
  UPDATE_PRODUCT_REQUEST: 'list/UPDATE_PRODUCT_REQUEST',
  TOGGLE_PRODUCT: 'list/TOGGLE_PRODUCT',

  NEW_LIST_REQUEST: 'list/NEW_LIST_REQUEST',
};

export const Creators = {
  addProductRequest(list, product) {
    return {
      type: Types.ADD_PRODUCT_REQUEST,
      list,
      product,
    };
  },

  deleteProduct(id) {
    return {
      type: Types.DELETE_PRODUCT_REQUEST,
      id,
    };
  },

  toggleProduct: (id) => ({
    type: Types.TOGGLE_PRODUCT,
    id,
  }),

  updateProduct: (product, list) => ({
    type: Types.UPDATE_PRODUCT_REQUEST,
    product,
    list,
  }),

  newList: () => ({
    type: Types.NEW_LIST_REQUEST,
  }),
};
