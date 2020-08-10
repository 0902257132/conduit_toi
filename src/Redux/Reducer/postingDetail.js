import * as actionsType from "./../Const/TagTypes";

const initialState = {
  statusPostingDetail: "none",
  statusComment: "none",
};
const reducerFeaturesPosting = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.SHOW_ICON_FEATURE_POSTING_DEATIL:
      return {
        ...state,
        statusPostingDetail: "block",
      };
    case actionsType.SHOW_ICON_FEATURE_COMMENT:
      return {
        ...state,
        statusComment: "block",
      };
    case actionsType.HIDDEN_ICON_FEATURE_POSTING_DEATIL:
      return {
        ...state,
        statusPostingDetail: "none",
      };
    case actionsType.HIDDEN_ICON_FEATURE_COMMENT:
      return {
        ...state,
        statusComment: "none",
      };
    default:
      return state;
  }
};
export default reducerFeaturesPosting;
