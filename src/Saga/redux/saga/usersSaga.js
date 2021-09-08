import * as actionTypes from '../actions/actionTypes'
import { all,  call,  put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getAllUsers(){
    try{
        let users = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users')
        yield put({
            type: actionTypes.GET_ALL_USERS_SUCCESS,
            data: users.data
        })
    }catch(error){
        yield put({
            type: actionTypes.GET_ALL_USERS_FAIL,
            message: error.message
        })
    }
}

function* getSingleUser({id}){
    try {
        let user = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users/'+id)
        yield put({
            type: actionTypes.GET_SINGLE_USER_SUCCESS,
            data: user.data
        })
    } catch (error) {
        yield put({
            type: actionTypes.GET_ALL_USERS_FAIL,
            message: error.message
        })
    }
}

function* addUser({payload}){
    try {
        let user = yield call(axios.post, 'https://jsonplaceholder.typicode.com/users',payload)
        yield put({
            type: actionTypes.ADD_USER_SUCCESS,
            data: user.data
        })
    } catch (error) {
        yield put({
            type: actionTypes.ADD_USER_FAIL,
            message: error.message
        })
    }
}

function* editUser({payload, id}){
    try {
        let user = yield call(axios.put, 'https://jsonplaceholder.typicode.com/users/'+id, payload)
        yield put({
            type: actionTypes.EDIT_USER_SUCCESS,
            data: user.data
        })
    } catch (error) {
        yield put({
            type: actionTypes.EDIT_USER_FAIL,
            message: error.message
        })
    }
}

function* deleteUser({id}){
    try {
        yield call(axios.delete, 'https://jsonplaceholder.typicode.com/users/'+id)
        yield put({
            type: actionTypes.DELETE_USER_SUCCESS,
            data: id
        })
    } catch (error) {
        yield put({
            type: actionTypes.DELETE_USER_FAIL,
            message: error.message
        })
    }
}


export function* watchUsers(){
    yield all([
        takeLatest(actionTypes.GET_ALL_USERS, getAllUsers),
        takeLatest(actionTypes.GET_SINGLE_USER, getSingleUser),
        takeLatest(actionTypes.ADD_USER, addUser),
        takeLatest(actionTypes.EDIT_USER, editUser),
        takeLatest(actionTypes.DELETE_USER, deleteUser)
    ])
}