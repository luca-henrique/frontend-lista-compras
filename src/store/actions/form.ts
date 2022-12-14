export const Types = {
  UPDATE_PRODUCT_REQUEST: 'form/UPDATE_PRODUCT_REQUEST',
  UPDATE_PRODUCT_SUCCESS: 'form/UPDATE_PRODUCT_SUCCESS',

  CREATE_PRODUCT_REQUEST: 'form/CREATE_PRODUCT_REQUEST',
  CREATE_PRODUCT_SUCCESS: 'form/CREATE_PRODUCT_SUCCESS',
};

export const Creator = {
  updateProductRequest: (list, product) => ({
    type: Types.UPDATE_PRODUCT_REQUEST,
    list,
    product,
  }),

  updateProductSuccess: () => ({
    type: Types.UPDATE_PRODUCT_SUCCESS,
  }),

  createProductRequest: (list) => ({
    type: Types.CREATE_PRODUCT_REQUEST,
    list,
  }),

  createProductSuccess: () => ({
    type: Types.CREATE_PRODUCT_SUCCESS,
  }),
};
