const reducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case "CHANGE_PAGE_TITLE":
      const { pageURL } = action;

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

    case "TOGGLE_DARK_MODE":
      return { ...state, darkMode: !payload}
    
    default: return "No case found"
  }
  throw new Error("No matching action type found in the reducer");
}

export default reducer
