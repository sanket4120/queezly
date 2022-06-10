import { createContext } from 'react';
import UserProvider from './userContext';
import MessageProvider from './messageContext';
import { CategoryProvider } from './categoryContext';
import { QuizProvider } from './quizContext';

const initialilState = {};
const GlobalContext = createContext(initialilState);

const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={initialilState}>
      <CategoryProvider>
        <QuizProvider>
          <MessageProvider>
            <UserProvider>{children}</UserProvider>
          </MessageProvider>
        </QuizProvider>
      </CategoryProvider>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
