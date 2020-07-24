import * as actionTypes from "./../Const/TagTypes"

const initialState = {
    listTags: [],
};
const reducerTag = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_TAG: 
            return {
                ...state,
                listTags: action.listTags
            }
        default:
            return state;
    }
};
export default reducerTag;
