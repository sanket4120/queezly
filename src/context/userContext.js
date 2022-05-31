import { createContext, useContext, useReducer } from 'react';
import { initialState, authReducer } from '../reducers/userReducer';

const UserContext = createContext(initialState);

const UserProvider = ({ children }) => {
  const [authState, setAuth] = useReducer(authReducer, initialState.auth);

  return (
    <UserContext.Provider
      value={{
        authState,
        setAuth,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

export default UserProvider;
