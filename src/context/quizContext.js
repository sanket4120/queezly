import { createContext, useContext, useReducer } from 'react';
import {
  currentQuizReducer,
  initialState,
  quizReducer,
} from '../reducers/quizReducer';

const QuizContext = createContext(initialState);

const QuizProvider = ({ children }) => {
  const [quizState, setQuiz] = useReducer(quizReducer, initialState);
  const [currentQuizState, setCurrentQuiz] = useReducer(
    currentQuizReducer,
    initialState
  );

  return (
    <QuizContext.Provider
      value={{ quizState, setQuiz, currentQuizState, setCurrentQuiz }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz };
