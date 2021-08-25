import * as actionTypes from '../actions/acitonTypes'
import {all, put, takeLatest} from 'redux-saga/effects'

function* buyMobile(){
    yield put({
        type: actionTypes.BUY_MOBILE_SUCCESS
    })
}

function* sellMobile(){
    yield put({
        type: actionTypes.SELL_MOBILE_SUCCESS
    })
}

export function* watchMobile(){
    yield all([
        takeLatest(actionTypes.BUY_MOBILE, buyMobile),
        takeLatest(actionTypes.SELL_MOBILE, sellMobile)
    ])
}