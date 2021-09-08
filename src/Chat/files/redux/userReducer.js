import * as actionTypes from './actionTypes'

const initialState={
    loading:false,
    users:[],
    error:'',
    message:[],
    singleUser:[],
    userId:''
}

export const userReducer=(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.USERS_LIST:
            return{...state}
        case actionTypes.FETCH_USERS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actionTypes.FETCH_USERS_SUCESS:
            return{
                ...state,
                loading: false,
                users: action.payload,
                error:''
            }
        case actionTypes.FETCH_USERS_FAIL:
            return{
                ...state,
                loading: false,
                users:[],
                error: action.payload

            }
        case actionTypes.ADD_USER:
            return{
                ...state,
                users: [...state.users,{id:Date.now(), username:action.payload.user} ]
            }
        case actionTypes.SEND_MESSAGE:
            //console.log(action.payload.message)
            //console.log(action.payload.id)
            const item = state.users.find(item => item.id === action.payload.id)
            const inMessage = state.message.find(item => item.id === action.payload.id ? true: false)
            return{
                ...state,
                message: inMessage ? state.message.map(item => item.id===action.payload.id ?
                        {...item, text: [...item.text, action.payload.message]} : item) : [...state.message, {...item, text:[action.payload.message]}]
            }
        case actionTypes.GET_USER_ID:
            return{
                ...state,
                userId: action.payload.id
            }
        default:
            return state
    }
}