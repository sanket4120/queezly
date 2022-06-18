import {
  USER_RESULT_FAIL,
  USER_RESULT_REQUEST,
  USER_RESULT_SUCCESS,
} from '../constants/resultConstants';

const initialState = {};

const userResultReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_RESULT_REQUEST:
      return { loading: true };
    case USER_RESULT_SUCCESS:
      return { loading: false, userResults: payload };
    case USER_RESULT_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export { userResultReducer, initialState };
