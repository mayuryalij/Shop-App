import {
  SET_ERROR,
  SET_LOADING,
  SET_SUCCESS,
} from '../../constants/actionTypes';

const setError = (val) => {
  return {
    type: SET_ERROR,
    payload: val,
  };
};

const setSuccess = (val) => {
  return {
    type: SET_SUCCESS,
    payload: val,
  };
};

const setLoading = (val) => {
  return {
    type: SET_LOADING,
    payload: val,
  };
};

export { setError, setSuccess, setLoading };
