import * as acitonTypes from '../actions/actionTypes'

const initialState={
    isLoading:false,
    users:[],
    error:''
}

export const dataReducer=(state=initialState, action)=>{
    switch(action.type){
        case acitonTypes.SEND_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case acitonTypes.SEND_REQUEST_SUCCESS:
            return{
                ...state,
                isLoading: false,
                users: action.payload,
                error:''
            }
        case acitonTypes.SEND_REQUEST_FAIL:
            return{
                ...state,
                isLoading:false,
                users:[],
                error:action.payload 
            }
        default:
            return state
    }
}