import {
  fork,
  take,
  call,
  put,
  delay,
  all,
  takeLatest,
  takeEvery,
} from "redux-saga/effects";
import * as tagTypes from "./../Redux/Const/TagTypes";
import {
  actionShowLoading,
  actionHiddenLoading,
} from "./../Redux/Action/loading";
import {
  actionDisplayBlock,
  actionDisplayNone,
  actionSaveValuesAuthen,
} from "./../Redux/Action/authentication";
import {
  getTag,
  getArticles,
  actionGetArticlesFollowTagName,
  actionFetchhUser,
  actionFetchArticleSlug,
  actionFetchComment,
} from "./../Redux/Action/api";
import { loadTag } from "./../Redux/Action/tag";
import { actionLoadArticles } from "./../Redux/Action/articles";
import { actionSuccessFetchSlug } from "./../Redux/Action/slugArticle";
import { actionFetchCommentSuccess } from "./../Redux/Action/comment";
import { useHistory } from "react-router-dom";

function* manageTagActionAPI() {
  yield take(tagTypes.FETCH_TAG);
  const result = yield call(getTag);
  if (result.status === tagTypes.STATUS_API.SUCCESS)
    yield put(loadTag(result.data.tags));
  else yield console.log("Failed get tag from API");
}

function* manageArticlesActionAPI() {
  yield take(tagTypes.FETCH_ARTICLES);
  const result = yield call(getArticles);
  const { articles, articlesCount } = result.data;
  if (result.status === tagTypes.STATUS_API.SUCCESS)
    yield put(actionLoadArticles(articles, articlesCount));
  else yield console.log("Failed get Articels from API");
}
function* getArticlesFollowTagName(key) {
  const result = yield call(actionGetArticlesFollowTagName, key.tagName);
  if (result.status === tagTypes.STATUS_API.SUCCESS) {
    const { articles, articlesCount } = result.data;
    yield put(actionLoadArticles(articles, articlesCount));
  } else yield console.log("FAILED GET_ARTICLES_FOLLOW_TAG_NAME");
}
function* getUserInformation({ payload }) {
  const result = yield call(actionFetchhUser, payload.email, payload.password);
  if (result.status === tagTypes.STATUS_API.SUCCESS) {
    const { id, username, email, token } = result.data.user;
    sessionStorage.setItem("userName", username);
    sessionStorage.setItem("token", token);
    yield put(actionSaveValuesAuthen(id, username, email, token));
    // browserHistory.push('subscribe-success');
  } else yield console.log("FAILED FECTCH USER");
}

// Lấy articles theo slug
function* getArticleSlug(payload) {
  const result = yield call(actionFetchArticleSlug, payload.url);
  if (result.status === tagTypes.STATUS_API.SUCCESS) {
    yield put(actionSuccessFetchSlug(result.data.article));
  } else yield console.log("FAILED GET_ARTICLES_FOLLOW_TAG_NAME");
}
// Lấy comment của từng bài viết
function* getComment({ payload }) {
  const result = yield call(actionFetchComment, payload.endpoint);
  if (result.status === tagTypes.STATUS_API.SUCCESS)
    yield put(actionFetchCommentSuccess(result.data.comments));
  else console.log("FECTCH_COMMENT_FAILED");
}
function* manageAuthenFeature() {
  yield take(tagTypes.SAVE_AUTHENTICATION);
  yield put(actionDisplayBlock());
}
function* manageListLoadActions() {
  while (true) {
    yield take(tagTypes.TAG_NAV);
    yield put(actionShowLoading());
    yield delay(1000);
    yield put(actionHiddenLoading());
  }
}
// function* signIn({ payload }){
//     yield delay(500)

//     yield console.log("SIGN_IN", payload.name)
//     yield put(actionSaveValuesAuthen())
// }
export default function* rootSaga() {
  yield takeEvery(tagTypes.TAG_NAV, getArticlesFollowTagName);
  yield takeEvery(tagTypes.SIGN_IN, getUserInformation);
  yield takeEvery(tagTypes.FETCH_SLUG, getArticleSlug);
  yield takeEvery(tagTypes.FETCH_COMMENT, getComment);
  yield fork(manageTagActionAPI);
  yield fork(manageArticlesActionAPI);
  yield fork(manageListLoadActions);
  yield fork(manageAuthenFeature);
}
