import * as actionTypes from "./../Const/TagTypes";

const initialState = {
  slugArticle: null,
};
const reducerSlugArticle = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SLUG_SUCCESS:
      return {
        ...state,
        slugArticle: action.article,
      };
    default:
      return state;
  }
};
export default reducerSlugArticle;
