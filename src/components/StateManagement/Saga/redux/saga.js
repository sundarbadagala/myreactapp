import {call, put, takeLatest} from 'redux-saga/effects'
import * as actionTypes from './actionTypes'
import {fetchData} from './api'
import {fetchProductsSuccess, fetcProductsFail} from './actions'

function* getApiData(){
    try{
        const res = yield call(fetchData)
        yield put(fetchProductsSuccess(res.data))
    }catch(error){
        yield put(fetcProductsFail(error.message))
    }
}


export default function* mySaga(){
    yield takeLatest(actionTypes.FETCH_PRODUCTS_REQUEST, getApiData)
}

