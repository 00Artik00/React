import { getGistsStart, getGistsSuccess, getGistsError } from "./actions";
import { getGistsBySearchStart, getGistsBySearchSuccess, getGistsBySearchError } from "./actions";

export const getGists = (page) => async (dispatch, _, api) => {
  try {
    dispatch(getGistsStart());

    const { data } = await api.getPublicApi(page);

    dispatch(getGistsSuccess(data));
  } catch (e) {
    dispatch(getGistsError(e));
  }
};

export const getGistsBySearch = () => async (dispatch, _, api) => {
  try {
    dispatch(getGistsBySearchStart());

    const { data } = await api.searchGistsByNameApi();

    dispatch(getGistsBySearchSuccess(data));
  } catch (e) {
    dispatch(getGistsBySearchError(e));
  }
};