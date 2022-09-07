import { GET_GISTS_START, GET_GISTS_SUCCESS, GET_GISTS_ERROR } from "./types";
import { GET_GISTSBYSEARCH_START, GET_GISTSBYSEARCH_SUCCESS, GET_GISTSBYSEARCH_ERROR } from "./types";
const initialState = {
  gists: [],
  pending: false,
  error: null,

  gistsBySearch: [],
  pendingBySearch: false,
  errorBySearch: null,
};

export const gistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GISTS_START:
      return { ...state, pending: true, error: null };
    case GET_GISTS_SUCCESS:
      return { ...state, pending: false, gists: action.payload };
    case GET_GISTS_ERROR:
      return { ...state, pending: false, error: action.payload };

    case GET_GISTSBYSEARCH_START:
      return { ...state, pendingBySearch: true, errorBySearch: null };
    case GET_GISTSBYSEARCH_SUCCESS:
      return { ...state, pendingBySearch: false, gistsBySearch: action.payload };
    case GET_GISTSBYSEARCH_ERROR:
      return { ...state, pendingBySearch: false, errorBySearch: action.payload };

    default:
      return state;
  }
};
