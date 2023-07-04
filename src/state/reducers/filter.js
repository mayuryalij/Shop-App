import { SET_FILTER } from '../../constants/actionTypes';

const INIT_STATE = 'all';

const filterReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;

    default:
      return state;
  }
};

export default filterReducer;
