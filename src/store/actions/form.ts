export const Types = {
  UPDATE_PRODUCT_REQUEST: 'form/UPDATE_PRODUCT_REQUEST',
  UPDATE_PRODUCT_SUCCESS: 'form/UPDATE_PRODUCT_SUCCESS',
};

export const Creator = {
  updateProductRequest: (product) => ({
    type: Types.UPDATE_PRODUCT_REQUEST,
    product,
  }),

  updateProductSuccess: () => ({
    type: Types.UPDATE_PRODUCT_SUCCESS,
  }),
};
