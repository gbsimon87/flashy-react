const reducer = (state, action) => {
  const { payload, type, pageURL } = action;

  switch (type) {
    case "CHANGE_PAGE_TITLE":

      if (pageURL === "/") {
        return { ...state, pageTitle: "home"}
      }
      if (pageURL === "/colors") {
        return { ...state, pageTitle: "colors"}
      }
      if (pageURL === "/shapes") {
        return { ...state, pageTitle: "shapes"}
      }
      if (pageURL === "/numbers") {
        return { ...state, pageTitle: "numbers"}
      }
      if (pageURL === "/letters") {
        return { ...state, pageTitle: "letters"}
      }
      if (pageURL === "/settings") {
        return { ...state, pageTitle: "settings"}
      }

      break;
    
    case "TOGGLE_AUTOPLAY":
      return { ...state, autoplay: !payload }
    
    case "TOGGLE_THEME":
      const { currentTheme, themes } = payload;
      const theme = currentTheme === themes.light ? themes.dark : themes.light
      return { ...state, theme }

    case "CHANGE_GAME_TYPE":
      let gameType = null;

      if (pageURL === "/colors") {
        gameType = "colors"
      }
      if (pageURL === "/shapes") {
        gameType = "shapes"
      }
      if (pageURL === "/numbers") {
        gameType = "numbers"
      }
      if (pageURL === "/letters") {
        gameType = "letters"
      }

      return { ...state, gameType }

    case "CHANGE_CARD_FLIP_TIME":
      return { ...state, cardFlipTime: parseInt(payload)}

    case "TOGGLE_SIDEBAR":
      const { isSidebarOpen } = state;
      return {...state, isSidebarOpen: !isSidebarOpen}

    default: throw new Error("No matching action type found in the reducer");
  }
}

export default reducer
