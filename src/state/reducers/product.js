import { SET_PRODUCT } from '../../constants/actionTypes';

const INIT_STATE = {};

const productReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return action.payload;

    default:
      return state;
  }
};

export default productReducer;
