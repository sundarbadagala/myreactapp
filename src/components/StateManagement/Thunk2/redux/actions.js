import axios from 'axios'
import * as actionTypes from './actionTypes'

export const fetchUsersRequest=()=>{
    return{
        type : actionTypes.FETCHING_PRODUCTS_REQUEST
    }
}

export const fetchUsersSuccess=(products)=>{
    return{
        type : actionTypes.FETCHING_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const fetchUsersFail=(errorMessage)=>{
    return{
        type : actionTypes.FETCHING_PRODUCTS_FAIL,
        payload: errorMessage
    }
}

export const fetchUsers=()=>{
    return function (dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://fakestoreapi.com/products')
        .then(res => dispatch(fetchUsersSuccess(res.data)))
        .catch(error => dispatch(fetchUsersFail(error)))
    }
}