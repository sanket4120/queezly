import axios from 'axios';
import {
  CATEGORY_REQUEST,
  CATEGORY_SUCCESS,
  CATEGORY_FAIL,
} from '../constants/categoryConstants';

const getCategories = async (dispatch) => {
  dispatch({ type: CATEGORY_REQUEST });
  try {
    const res = await axios.get('/api/category');
    dispatch({ type: CATEGORY_SUCCESS, payload: res.data.categories });
  } catch (error) {
    dispatch({ type: CATEGORY_FAIL, payload: 'Server Error' });
  }
};

export { getCategories };
