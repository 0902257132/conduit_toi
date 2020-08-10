import * as actionTypes from "./../Const/TagTypes";

const initialState = {
  tests: "",
};
const reducerTests = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LIST_BOOKSTORE_SUCCESS:
      return {
        ...state,
        tests: action.payload,
      };
    default:
      return state;
  }
};
export default reducerTests;
