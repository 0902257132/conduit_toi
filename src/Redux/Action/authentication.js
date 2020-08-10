import * as typeActions from "./../Const/TagTypes";
export const actionSaveValuesAuthen = (action) => {
  return {
    type: typeActions.SAVE_AUTHENTICATION,
    action,
  };
};

export const actionDisplayNone = () => {
  return {
    type: typeActions.STATUS_NONE,
  };
};
export const actionSignIn = (email, password) => {
  return {
    type: typeActions.SIGN_IN,
    payload: {
      email,
      password,
    },
  };
};
