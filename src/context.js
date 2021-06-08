import {
  createContext,
  useContext,
  useReducer,
} from 'react';

import reducer from './reducer';

const AppContext = createContext();

const initialState = {
  loading: false,
  pageTitle: 'Home',
  autoplay: false
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const changePageTitle = (pageURL = "") => {
    dispatch({ type: "CHANGE_PAGE_TITLE", pageURL });
  }
  
  const toggleAutoplay = (payload) => {
    dispatch({ type: "TOGGLE_AUTOPLAY", payload });
  }
  
  const toggleDarkMode = (payload) => {
    dispatch({ type: "TOGGLE_DARK_MODE", payload });
  }

  return (
    <AppContext.Provider value={{
      ...state,
      changePageTitle,
      toggleAutoplay,
      toggleDarkMode,
    }}>
      { children }
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppProvider, useGlobalContext }
