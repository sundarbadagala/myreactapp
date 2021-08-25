import * as actionTypes from './actionTypes'

const initialState={
    products:[],
    loading:false,
    errorMessage:''
}

const fetchUserReducer=(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.FETCHING_PRODUCTS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case actionTypes.FETCHING_PRODUCTS_SUCCESS:
            return{
                loading: false,
                products:action.payload,
                errorMessage:''
            }
        case actionTypes.FETCHING_PRODUCTS_FAIL:
            return{
                loading: true,
                products:[],
                errorMessage: action.payload
            }
        default:
            return state

    }
}

export default fetchUserReducer