import * as typeActions from "./../Const/TagTypes";

export const actionCompare = (firstUser, secondUser) => {
  if (firstUser === secondUser)
    return {
      type: typeActions.SHOW_ICON_FEATURE_COMMENT,
    };
  else
    return {
      type: typeActions.HIDDEN_ICON_FEATURE_COMMENT,
    };
};
export const actionAuthorPostingDetail = (firstUser, secondUser) => {
  if (firstUser === secondUser)
    return {
      type: typeActions.SHOW_ICON_FEATURE_POSTING_DEATIL,
    };
  else
    return {
      type: typeActions.HIDDEN_ICON_FEATURE_POSTING_DEATIL,
    };
};
export const actionShowFeaturePostingDetail = () => {
  return {
    type: typeActions.SHOW_ICON_FEATURE_POSTING_DEATIL,
  };
};
export const actionHiddenFeaturePostingDetail = () => {
  return {
    type: typeActions.HIDDEN_ICON_FEATURE_POSTING_DEATIL,
  };
};
export const actionShowFeatureComment = () => {
  return {
    type: typeActions.SHOW_ICON_FEATURE_COMMENT,
  };
};
export const actionHiddenFeatureComment = () => {
  return {
    type: typeActions.HIDDEN_ICON_FEATURE_COMMENT,
  };
};
