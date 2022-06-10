import {
  CURRENT_QUIZ_FAIL,
  CURRENT_QUIZ_REQUEST,
  CURRENT_QUIZ_SUCCESS,
  NEXT_QUESTION,
  PREVIOUS_QUESTION,
  QUIZ_FAIL,
  QUIZ_REQUEST,
  QUIZ_SUCCESS,
  SELECT_OPTION,
} from '../constants/quizConstants';

const initialState = {};

const quizReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case QUIZ_REQUEST:
      return { loading: true };
    case QUIZ_SUCCESS:
      return { loading: false, quiz: payload };
    case QUIZ_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

const currentQuizReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CURRENT_QUIZ_REQUEST:
      return { loading: true };
    case CURRENT_QUIZ_SUCCESS:
      return { loading: false, currentQuiz: payload, currentQuestionIndex: 0 };
    case CURRENT_QUIZ_FAIL:
      return { loading: false, error: payload };
    case NEXT_QUESTION:
      if (state.currentQuestionIndex + 1 < state.currentQuiz.questions.length) {
        return {
          ...state,
          currentQuestionIndex: state.currentQuestionIndex + 1,
        };
      }
      return state;
    case PREVIOUS_QUESTION:
      if (state.currentQuestionIndex > 0) {
        return {
          ...state,
          currentQuestionIndex: state.currentQuestionIndex - 1,
        };
      }
      return state;
    case SELECT_OPTION:
      const currentQuestion =
        state.currentQuiz.questions[state.currentQuestionIndex];
      currentQuestion.options.forEach((option) => {
        option._id === payload
          ? (option.isSelected = true)
          : (option.isSelected = false);
      });
      return { ...state, questions: { ...state.questions, currentQuestion } };
    default:
      return state;
  }
};

export { quizReducer, initialState, currentQuizReducer };
