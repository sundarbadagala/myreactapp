import { call, put, takeLatest} from "@redux-saga/core/effects";
import * as actionTypes from '../actions/actionTypes'
import axios from "axios";
import { fetchDataSuccess, fetchDataFail } from "../actions/actions";

function* sendRequest(action){
    try{
        const url=`https://api.spacexdata.com/v3/launches`
        let response =yield call(()=>axios.get(url))
        // console.log(response.data)
        yield put(
            fetchDataSuccess(response.data)
        )
    }catch(error){
        yield put(
            fetchDataFail(error.message)
        )
    }

}


export function* watchData(){
    yield takeLatest(actionTypes.SEND_REQUEST, sendRequest)
}