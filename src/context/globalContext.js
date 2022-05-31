import { createContext } from 'react';
import UserProvider from './userContext';
import MessageProvider from './messageContext';

const initialilState = {};
const GlobalContext = createContext(initialilState);

const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={initialilState}>
      <MessageProvider>
        <UserProvider>{children}</UserProvider>
      </MessageProvider>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
