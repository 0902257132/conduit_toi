import * as actionTypes from "../Const/TagTypes";
export const loadTag = (listTags) => {
  return {
    type: actionTypes.LOAD_TAG,
    listTags,
  };
};
