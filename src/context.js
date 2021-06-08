import {
  createContext,
  useContext,
  useReducer,
} from 'react';

import reducer from './reducer';

const AppContext = createContext();

const themeColors = {
  white: "white",
  primary1: "rgb(119, 146, 201)",
  primary2: "rgb(176,182,201)",
  primary3: "rgb(64,74,111)",
  primary4: "rgb(42,51,71)",
  primary5: "rgb(19,25,45)",
}

export const themes = {
  dark: {
    color: themeColors.white,
    background: themeColors.primary5,
  },
  light: {
    color: themeColors.primary5,
    background: themeColors.white,
  },
}

const initialState = {
  loading: false,
  pageTitle: 'Home',
  autoplay: false,
  theme: themes.light,
  gameType: null
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const changePageTitle = (pageURL = "") => {
    dispatch({ type: "CHANGE_PAGE_TITLE", pageURL });
  }

  const changeGameType = (pageURL = "") => {
    dispatch({ type: "CHANGE_GAME_TYPE", pageURL });
  }
  
  const toggleAutoplay = (payload) => {
    dispatch({ type: "TOGGLE_AUTOPLAY", payload });
  }
  
  const toggleTheme = (currentTheme, themes) => {
    const payload = {
      currentTheme,
      themes
    }
    dispatch({ type: "TOGGLE_THEME", payload });
  }

  return (
    <AppContext.Provider value={{
      ...state,
      changePageTitle,
      toggleAutoplay,
      toggleTheme,
      themes,
      changeGameType,
    }}>
      { children }
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppProvider, useGlobalContext }
