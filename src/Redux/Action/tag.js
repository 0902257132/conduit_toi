import * as actionTypes from "../Const/TagTypes"
export const loadTag = listTags => {
    return {
        type: actionTypes.LOAD_TAG,
        listTags
    }
}
export const fetchTag = () =>{
    return{
        type: actionTypes.FETCH_TAG
    }
}
