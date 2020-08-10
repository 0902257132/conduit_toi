import * as typeActions from "./../Const/TagTypes";

export const actionFectchComment = (endpoint) => {
  return {
    type: typeActions.FETCH_COMMENT,
    payload: {
      endpoint,
    },
  };
};
export const actionFetchCommentSuccess = (listComment) => {
  return {
    type: typeActions.FETCH_COMMENT_SUCCESS,
    listComment,
  };
};
