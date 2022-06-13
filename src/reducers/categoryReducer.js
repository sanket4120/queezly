import {
  CATEGORY_FAIL,
  CATEGORY_REQUEST,
  CATEGORY_SUCCESS,
} from '../constants/categoryConstants';

const initialState = {};

const categoryReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_REQUEST:
      return { loading: true };
    case CATEGORY_SUCCESS:
      return { loading: false, categories: payload };
    case CATEGORY_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export { initialState, categoryReducer };
