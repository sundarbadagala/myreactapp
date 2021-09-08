import axios from 'axios'
import * as actionTypes from './actionTypes'


export const userList=()=>{
    return{
        type:actionTypes.USERS_LIST
    }
}

export const addUser=(user)=>{
    return{
        type:actionTypes.ADD_USER,
        payload:{
            user:user
        }
    }
}

export const sendMessage=(message, id)=>{
    return{
        type: actionTypes.SEND_MESSAGE,
        payload:{
            message: message,
            id:id
        }
    }
}

export const setStyle=(id)=>{
    return{
        type: actionTypes.SET_STYLE,
        payload:{
            id:id
        }
    }
}

export const getUserId=(id)=>{
    return{
        type: actionTypes.GET_USER_ID,
        payload:{
            id:id
        }
    }
}

export const fetchUsersRequest=()=>{
    return{
        type: actionTypes.FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess=(data)=>{
    return{
        type: actionTypes.FETCH_USERS_SUCESS,
        payload: data
    }
}

export const fetchUsersFail=(error)=>{
    return{
        type: actionTypes.FETCH_USERS_FAIL,
        payload: error
    }
}

export const fetchUsers=()=>dispatch=>{
    dispatch(fetchUsersRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => dispatch(fetchUsersSuccess(res.data)))
    .catch(error => dispatch(fetchUsersFail(error.message)))
}