import * as actionsType from "./../Const/TagTypes";

const initialState = {
  listComments: null,
};
const reducerComment = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.FETCH_COMMENT_SUCCESS:
      return {
        ...state,
        listComments: action.listComment,
      };
    default:
      return state;
  }
};
export default reducerComment;
