import { GET_GISTS_START, GET_GISTS_SUCCESS, GET_GISTS_ERROR } from "./types";
import { GET_GISTSBYSEARCH_START, GET_GISTSBYSEARCH_SUCCESS, GET_GISTSBYSEARCH_ERROR } from "./types";

export const getGistsStart = () => ({ type: GET_GISTS_START });
export const getGistsSuccess = (gists) => ({
  type: GET_GISTS_SUCCESS,
  payload: gists,
});
export const getGistsError = (error) => ({
  type: GET_GISTS_ERROR,
  payload: error,
});


export const getGistsBySearchStart = () => ({ type: GET_GISTSBYSEARCH_START });
export const getGistsBySearchSuccess = (gists) => ({
  type: GET_GISTSBYSEARCH_SUCCESS,
  payload: gists,
});
export const getGistsBySearchError = (error) => ({
  type: GET_GISTSBYSEARCH_ERROR,
  payload: error,
});
