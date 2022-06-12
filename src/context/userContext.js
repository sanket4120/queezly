import { createContext, useContext, useReducer, useEffect } from 'react';
import { initialState, authReducer } from '../reducers/userReducer';
import { setAuthToken } from '../utils/setAuthToken';

const UserContext = createContext(initialState);

const UserProvider = ({ children }) => {
  const [authState, setAuth] = useReducer(authReducer, initialState.auth);

  useEffect(() => {
    const encodedToken = localStorage.getItem('token');
    setAuthToken(encodedToken);
  }, [authState]);

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
