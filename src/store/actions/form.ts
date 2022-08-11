export const Types = {
  UPDATE_PRODUCT_REQUEST: 'form/UPDATE_PRODUCT_REQUEST',
};

export const Creator = {
  updateProductRequest: (product) => ({
    type: Types.UPDATE_PRODUCT_REQUEST,
    product,
  }),
};
