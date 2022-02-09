import * as actionTypes from '../actions/actionTypes'
import {put, takeLatest } from "@redux-saga/core/effects";
import { all } from 'redux-saga/effects';
// import {addTodo} from '../actions/actions'

function* todoAdd({payload}){
    console.log('saga task', payload)
    yield put({
        type: actionTypes.ADD_TODO_SUCCESS,
        todo: payload
    })
}

function* todoDelete({payload}){
    console.log('saga id', payload)
    yield put({
        type: actionTypes.DELETE_TODO_SUCCESS,
        id: payload

    })

}


export function* watchTodo(){
    yield all([
        takeLatest(actionTypes.ADD_TODO, todoAdd),
        takeLatest(actionTypes.DELETE_TODO, todoDelete)
    ])
}