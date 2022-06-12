import axios from 'axios';
import {
  USER_RESULT_FAIL,
  USER_RESULT_REQUEST,
  USER_RESULT_SUCCESS,
} from '../constants/resultConstants';
import { setMessage } from './messageActions';

const addResult = async (result, setMessages) => {
  try {
    await axios.post('/api/results', { result });
    setMessage(setMessages, 'Submitted Successfully', 'success');
  } catch (error) {
    setMessage(setMessages, 'Server Error', 'danger');
  }
};

const getUserResults = async (userId, dispatch) => {
  dispatch({ type: USER_RESULT_REQUEST });
  try {
    const res = await axios.get(`/api/results/${userId}`);
    dispatch({ type: USER_RESULT_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: USER_RESULT_FAIL, payload: 'Server Error' });
  }
};

export { addResult, getUserResults };
