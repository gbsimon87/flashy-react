import {
  createContext,
  useContext,
  useReducer,
} from 'react';

import reducer from './reducer';

const AppContext = createContext();

const initialState = {
  loading: false,
  pageTitle: 'Home'
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const changePageTitle = (pageURL = "") => {
    dispatch({ type: "CHANGE_PAGE_TITLE", pageURL });
  }

  return (
    <AppContext.Provider value={{
      ...state,
      changePageTitle
    }}>
      { children }
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppProvider, useGlobalContext }
