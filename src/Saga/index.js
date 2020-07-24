import {useState} from "react";
import { fork, take, call, put, delay, all, takeLatest } from "redux-saga/effects";
import { useDispatch } from "react-redux"
import * as tagTypes from "./../Redux/Const/TagTypes";
import * as actionLoading from "./../Redux/Action/loading";
import { actionShowLoading, actionHiddenLoading } from "./../Redux/Action/loading";
import {actionDisplayBlock, actionDisplayNone, actionSaveValuesAuthen} from "./../Redux/Action/authentication"


// B1:dispath action 'actionTestSaga' in component app
// B2: Check type action "TEST_TAKE_SAGA"
// B4: excute 'actionShowLoading' by put helper method
// B5: delay 5s before turn off icon loading
// B6: retrurn values of action ShowLoading
function* callHelper() {
    const res = yield call(actionLoading.actionShowLoading)
    console.log("res: ", res)
}
function* printHello(){
    yield console.log("printHello")
}
function* manageAuthenFeature() {
    yield take(tagTypes.SAVE_AUTHENTICATION)
    yield put(actionDisplayBlock())
}

function* manageListActions(){
    while(true){
        yield take(tagTypes.TAG_NAV)
        yield put(actionShowLoading())
        yield delay(1000)
        yield put(actionHiddenLoading())
    }
}
// function* signIn({ payload }){ 
//     yield delay(500)
   
//     yield console.log("SIGN_IN", payload.name)
//     yield put(actionSaveValuesAuthen())
// }
export default function* rootSaga(){
    // yield all([ fork(manageListActions), fork(printHello) ])
    yield fork(manageListActions)
    yield fork(manageAuthenFeature)
    // yield takeLatest(tagTypes.SIGN_IN, signIn)
    // yield fork(printHello)
}