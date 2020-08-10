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
  actiondeleteComment,
  actionPostComment,
} from "./../Redux/Action/api";
import { loadTag } from "./../Redux/Action/tag";
import { actionLoadArticles } from "./../Redux/Action/articles";
import { actionSuccessFetchSlug } from "./../Redux/Action/slugArticle";
import { actionFetchCommentSuccess } from "./../Redux/Action/comment";
import { fetchListTests } from "./../Redux/Action/apiGraphQL";
import * as typeQueryGraphQL from "./../Redux/Const/typeGraphQL";
import { successFetchListTests } from "./../Redux/Action/test";

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
    const payload = { id, username, email, token };
    yield put(actionSaveValuesAuthen(payload));
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
// Xóa comment của 1 bài post
function* deleteComment({ payload }) {
  const result = yield call(actiondeleteComment, payload);
  if (result.status !== tagTypes.STATUS_API.SUCCESS)
    console.log("DELETE_FAILED");
  else console.log("DELETE_SUCCESS");
}
//Đăng một comment
function* postComment({ payload }) {
  const result = yield call(actionPostComment, payload);
  if (result.status === tagTypes.STATUS_API.SUCCESS)
    console.log("POST_SUCCESS");
  else console.log("POST_FAILED");
}
// Lấy data list Test thông qua GraphQL
function* fecthListTestBookStore() {
  const result = yield call(
    fetchListTests,
    typeQueryGraphQL.QUERY_GET_ALL_TESTS
  );
  yield put(actionShowLoading());
  yield delay(500);
  yield put(actionHiddenLoading());
  if (result.status === tagTypes.STATUS_API.SUCCESS)
    yield put(successFetchListTests(result.data.data.allTests));
  else console.log("FAILED FETCH LIST TESTS");
}
function* manageAuthenFeature() {
  yield take(tagTypes.SAVE_AUTHENTICATION);
  yield put(() => {
    return {
      type: tagTypes.STATUS_BLOCK,
    };
  });
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
  yield takeEvery(tagTypes.DELETE_COMMENT, deleteComment);
  yield takeEvery(tagTypes.POST_COMMENT, postComment);
  yield takeEvery(tagTypes.FETCH_LIST_BOOKSTORE, fecthListTestBookStore);
  yield fork(manageTagActionAPI);
  yield fork(manageArticlesActionAPI);
  yield fork(manageListLoadActions);
  yield fork(manageAuthenFeature);
}
