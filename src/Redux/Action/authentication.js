import * as typeActions from "./../Const/TagTypes"
export const actionSaveValuesAuthen = ( id ,userName, email, token) =>{
    return {
        type: typeActions.SAVE_AUTHENTICATION,
        userName,
        email,
        token,
        id
    }
}
export const actionDisplayNone = () => {
    return {
        type: typeActions.STATUS_NONE,  
    }
}
export const actionDisplayBlock = () => {
    return {
        type: typeActions.STATUS_BLOCK,
    }
}
export const actionSignIn = (name, password)=> {
    return{
        type: typeActions.SIGN_IN,
        payload: {
            name,
            password
        }
    }
}
