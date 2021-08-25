import * as actionTypes from '../actions/actionTypes'
import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from 'axios'

function* getAllUsers(){
    try {
        let users = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users')
        yield put({
            type: actionTypes.GET_ALL_USERS_SUCCESS,
            data: users.data
        })
    } catch (error) {
        yield put({
            type: actionTypes.GET_ALL_USERS_FAIL,
            message: error.message
        })
    }
}

export function* watchUsers(){
    yield all([
        takeLatest(actionTypes.GET_ALL_USERS, getAllUsers)
    ])
}