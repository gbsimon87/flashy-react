const reducer = (state, action) => {
  switch (action.type) {
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
      break;
    default:
  }
  throw new Error("No matching action type found in the reducer");
}

export default reducer
