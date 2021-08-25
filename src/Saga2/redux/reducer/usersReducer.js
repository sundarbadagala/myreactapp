import * as actionTypes from '../actions/actionTypes'

const initialState={
    error: '',
    users:[]
}

export const usersReducer=(state=initialState, action)=>{
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
        default:
            return state
    }

}