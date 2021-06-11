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
    nav: {
      color: themeColors.white,
      background: themeColors.primary5,
    },
    sidebar: {
      color: themeColors.primary2,
      background: themeColors.primary4,
    },
    main: {
      color: themeColors.white,
      background: themeColors.primary4,
    },
    footer: {
      color: themeColors.white,
      background: themeColors.primary4,
    },
    callout: {
      color: themeColors.primary1,
      background: themeColors.primary5,
    },
    calloutLink: {
      color: themeColors.primary5,
      background: themeColors.white,
    },
    home: {
      benefits: {
        color: themeColors.primary1,
        backgroundColor: themeColors.primary4,
      }
    }
  },
  light: {
    nav: {
      color: themeColors.primary5,
      background: themeColors.white,
    },
    sidebar: {
      color: themeColors.primary5,
      background: themeColors.white,
    },
    main: {
      color: themeColors.primary5,
      background: themeColors.white,
    },
    footer: {
      color: themeColors.primary5,
      background: themeColors.white,
    },
    callout: {
      color: themeColors.white,
      background: themeColors.primary1,
    },
    calloutLink: {
      color: themeColors.white,
      background: themeColors.primary5,
    },
    home: {
      benefits: {
        color: themeColors.primary3,
        backgroundColor: themeColors.primary2,
      }
    }
  },
}

const initialState = {
  loading: false,
  pageTitle: '',
  autoplay: false,
  theme: themes.light,
  gameType: null,
  cardFlipTime: 2,
  isSidebarOpen: false
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

  const changeCardFlipTime = (payload) => {
    dispatch({ type: "CHANGE_CARD_FLIP_TIME", payload });
  }

  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR", state });
  };

  return (
    <AppContext.Provider value={{
      ...state,
      changePageTitle,
      toggleAutoplay,
      toggleTheme,
      themes,
      changeGameType,
      changeCardFlipTime,
      toggleSidebar
    }}>
      { children }
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppProvider, useGlobalContext }
