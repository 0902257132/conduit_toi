import { combineReducers } from "redux";
import reducerTag from "./tag";
import reducerArtcles from "./articles";
import reducerLoading from "./loading";
import reducerAuthentication from "./authentication"

const rootReducer = combineReducers({
    Tags: reducerTag,
    Articles: reducerArtcles,
    statusLoading: reducerLoading,
    Authen: reducerAuthentication
});
export default rootReducer