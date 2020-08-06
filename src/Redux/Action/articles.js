import * as actionTypes from "../Const/TagTypes";

export const actionFetchArticles = () => {
  return {
    type: actionTypes.FETCH_ARTICLES,
  };
};
export const actionLoadArticles = (listArticles, count) => {
  return {
    type: actionTypes.LOAD_ARTICLES,
    listArticles,
    count,
  };
};
export const actionTagNav = (tagName) => {
  return {
    type: actionTypes.TAG_NAV,
    tagName,
  };
};
