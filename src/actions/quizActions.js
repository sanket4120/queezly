import axios from 'axios';
import {
  CURRENT_QUIZ_FAIL,
  CURRENT_QUIZ_REQUEST,
  CURRENT_QUIZ_SUCCESS,
  QUIZ_FAIL,
  QUIZ_REQUEST,
  QUIZ_SUCCESS,
} from '../constants/quizConstants';

const getQuizByCategory = async (categoryId, dispatch) => {
  dispatch({ type: QUIZ_REQUEST });
  try {
    const res = await axios.get(`/api/category/${categoryId}`);
    dispatch({ type: QUIZ_SUCCESS, payload: res.data.quiz });
  } catch (error) {
    dispatch({ type: QUIZ_FAIL, payload: 'Server Error' });
  }
};

const getQuiz = async (quizId, dispatch) => {
  dispatch({ type: CURRENT_QUIZ_REQUEST });
  try {
    const res = await axios.get(`/api/quiz/${quizId}`);
    dispatch({ type: CURRENT_QUIZ_SUCCESS, payload: res.data.quiz });
  } catch (error) {
    dispatch({ type: CURRENT_QUIZ_FAIL, payload: 'Server Error' });
  }
};

export { getQuizByCategory, getQuiz };
