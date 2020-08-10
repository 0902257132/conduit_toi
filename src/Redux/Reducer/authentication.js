import * as actionTypes from "./../Const/TagTypes";

const initialState = {
  userName: "",
  email: "",
  token: "",
  statusAuthenFeature: "none",
  statusNoneAuthenFeature: "block",
  id: 0,
};
const reducerAuthentication = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_AUTHENTICATION:
      const { userName, email, token, id } = action.action;
      console.log("AUTHEN : ", action);
      return {
        ...state,
        userName,
        email,
        token,
        id,
      };
    case actionTypes.STATUS_BLOCK:
      return {
        ...state,
        statusAuthenFeature: "block",
        statusNoneAuthenFeature: "none",
      };
    case actionTypes.STATUS_NONE:
      return {
        ...state,
        statusAuthenFeature: "none",
        statusNoneAuthenFeature: "block",
      };
    default:
      return state;
  }
};
export default reducerAuthentication;
