import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case HANDLE_PAGE:
      if (action.payload === true || action.payload === false)
        return {
          ...state,
          page: state.page + parseInt(action.payload ? 1 : -1),
        };
      return { ...state, page: action.payload };
    case HANDLE_SEARCH:
      return { ...state, query: action.payload, page: 0 };
    default:
      throw new Error(`No match ${action.type} action`);
  }
};
export default reducer;
