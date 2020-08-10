import * as typeActions from "./../Const/TagTypes";

export const successFetchListTests = (payload) => {
  return {
    type: typeActions.FETCH_LIST_BOOKSTORE_SUCCESS,
    payload,
  };
};
