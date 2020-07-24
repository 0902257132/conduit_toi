import * as actionsType from "./../Const/TagTypes"

const initialState = {
    statusLoading: false
}
const reducerLoading = (state = initialState, action) => {
    switch(action.type) {
        case actionsType.SHOW_LOADING_ICON:
            return {
                ...state,
                statusLoading: true
            }
        case actionsType.HIDDEN_LOADING_ICON:
            return {
                ...state,
                statusLoading: false
            }
        default:
            return state
    }
}
export default reducerLoading