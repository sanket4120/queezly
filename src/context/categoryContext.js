import { createContext, useContext, useReducer } from 'react';
import { categoryReducer, initialState } from '../reducers/categoryReducer';

const CategoryContext = createContext(initialState);

const CategoryProvider = ({ children }) => {
  const [categoryState, setCategory] = useReducer(
    categoryReducer,
    initialState
  );
  return (
    <CategoryContext.Provider value={{ categoryState, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { CategoryProvider, useCategory };
