export const Types = {
  ADD_PRODUCT_REQUEST: 'list/ADD_PRODUCT_REQUEST',
  DELETE_PRODUCT_REQUEST: 'list/DELETE_PRODUCT_REQUEST',
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
};
