import { combineReducers } from "redux";
import reducerTag from "./tag";
import reducerArtcles from "./articles";
import reducerLoading from "./loading";
import reducerAuthentication from "./authentication";
import reducerArticleSlug from "./slugArticle";
import reducerComment from "./comment";
import reducerTest from "./test";

const rootReducer = combineReducers({
  Tags: reducerTag,
  Articles: reducerArtcles,
  statusLoading: reducerLoading,
  Authen: reducerAuthentication,
  ArticleSlug: reducerArticleSlug,
  Comments: reducerComment,
  ListTests: reducerTest,
});
export default rootReducer;
