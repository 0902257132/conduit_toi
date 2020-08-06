import * as actionTypes from "../Const/TagTypes";

export const actionFetchSlug = (url) => {
  return {
    type: actionTypes.FETCH_SLUG,
    url,
  };
};
export const actionSuccessFetchSlug = (article) => {
  return {
    type: actionTypes.FETCH_SLUG_SUCCESS,
    article,
  };
};
