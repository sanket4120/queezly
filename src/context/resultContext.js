import { createContext, useContext, useReducer } from 'react';
import { initialState, userResultReducer } from '../reducers/resultReducer';

const ResultContext = createContext();

const ResultProvider = ({ children }) => {
  const [userResultState, setUserResult] = useReducer(
    userResultReducer,
    initialState
  );

  return (
    <ResultContext.Provider value={{ userResultState, setUserResult }}>
      {children}
    </ResultContext.Provider>
  );
};

const useResult = () => useContext(ResultContext);

export { ResultProvider, useResult };
