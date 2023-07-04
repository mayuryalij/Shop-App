import { SET_PRODUCT } from '../../constants/actionTypes';

const setProduct = (product) => {
  return {
    type: SET_PRODUCT,
    payload: product,
  };
};

export { setProduct };
