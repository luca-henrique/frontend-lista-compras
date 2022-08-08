export const Types = {
  ADD_PRODUCT_REQUEST: 'list/ADD_PRODUCT_REQUEST',
};

export const Creators = {
  addProductRequest(product, list) {
    return {
      type: Types.ADD_PRODUCT_REQUEST,
      product,
      list,
    };
  },
};
