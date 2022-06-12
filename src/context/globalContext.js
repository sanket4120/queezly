import { createContext } from 'react';
import UserProvider from './userContext';
import MessageProvider from './messageContext';
import { CategoryProvider } from './categoryContext';
import { QuizProvider } from './quizContext';
import { ResultProvider } from './resultContext';

const initialilState = {};
const GlobalContext = createContext(initialilState);

const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={initialilState}>
      <ResultProvider>
        <CategoryProvider>
          <QuizProvider>
            <MessageProvider>
              <UserProvider>{children}</UserProvider>
            </MessageProvider>
          </QuizProvider>
        </CategoryProvider>
      </ResultProvider>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
