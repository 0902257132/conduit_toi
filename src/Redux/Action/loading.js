import * as actionTypes from "../Const/TagTypes"

export const actionShowLoading = () =>{
    return {
        type: actionTypes.SHOW_LOADING_ICON
    }
}
export const actionHiddenLoading = () =>{
    return {
        type: actionTypes.HIDDEN_LOADING_ICON
    }
}
