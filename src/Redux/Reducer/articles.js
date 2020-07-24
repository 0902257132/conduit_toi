import * as actionTypes from "./../Const/TagTypes"

const initialState = {
    listArticles: [], // List articles returned from API 
    count: 0,   // Total element of Articles array
    tagNav: "" //Save name of tag which clicked by user
}
const reducerArticle = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_ARTICLES: 
            //TODO: HERE
            return {
                ...state,
                listArticles: action.listArticles,
                count: action.count
            }
        case actionTypes.TAG_NAV:
            return{
                ...state,
                tagNav: action.tagName
            }
        default:
            return state;
    }
};
export default reducerArticle;