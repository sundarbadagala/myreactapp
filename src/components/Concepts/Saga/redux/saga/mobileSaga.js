import {all, put, takeLatest} from 'redux-saga/effects'

function* buyMobile(){
    yield put({
        type:'BUY_MOBILE_SUCCESS'
    })
}

function* sellMobile(){
    yield put({
        type: 'SELL_MOBILE_SUCCESS'
    })
}

export function* watchMobile(){
    yield all([
        takeLatest('BUY_MOBILE', buyMobile),
        takeLatest('SELL_MOBILE', sellMobile)
    ])
}