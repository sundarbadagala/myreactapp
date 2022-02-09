import * as actionTypes from '../actions/actionTypes'
const initialState={
    users:[],
    error:'',
    user:{}
}

export const userReducer=(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.GET_ALL_USERS_SUCCESS:
            return{
                ...state,
                users: action.data
            }
        case actionTypes.GET_ALL_USERS_FAIL:
            return{
                ...state,
                error: action.message
            }
        case actionTypes.GET_SINGLE_USER_SUCCESS:
            return{
                ...state,
                user: action.data
            }
        case actionTypes.GET_SINGLE_USER_FAIL:
            return{
                ...state,
                error: action.message
            }
        case actionTypes.ADD_USER_SUCCESS:{
            let users=[...state.users]
            users.push(action.data)
            return{
                ...state,
                users
            }}
        case actionTypes.ADD_USER_FAIL:
            return{
                ...state,
                error: action.message
            }
        case actionTypes.EDIT_USER_SUCCESS:{
            let users=[...state.users]
            let findIndex = users.findIndex(item => item.id === action.data.id)
            console.log(action.data)
            users[findIndex]= action.data
            return{
                ...state,
                users
            }}
        case actionTypes.EDIT_USER_FAIL:
            return{
                ...state,
                error: action.message
            }
        case actionTypes.DELETE_USER_SUCCESS:{
            let users=[...state.users]
            let findIndex = users.findIndex(item => item.id === action.data)
            users.splice(findIndex, 1)
            return{
                ...state,
                users
            }}
        case actionTypes.DELETE_USER_FAIL:
            return{
                ...state,
                error: action.message
            }
        default:
            return state 
    }
}