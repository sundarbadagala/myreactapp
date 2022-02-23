import axios from 'axios'
import * as actionTypes from './actionTypes'

export const fetchProductsRequest = () =>{
    return{
        type : actionTypes.FETCH_PRODUCTS_REQUEST
    }
}

export const fetchProductsSuccess =(products)=>{
    return{
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const fetchProductsFail = (error) =>{
    return{
        type: actionTypes.FETCH_PRODUCTS_FAIL,
        payload:error
    }
}

export const fetchProducts =() =>{
    return function (dispatch){
        dispatch(fetchProductsRequest())
        axios.get(`https://fakestoreapi.com/products`)
        .then(res => dispatch(fetchProductsSuccess(res.data)))
        .catch(error => dispatch(fetchProductsFail(error.message)))
    }
}