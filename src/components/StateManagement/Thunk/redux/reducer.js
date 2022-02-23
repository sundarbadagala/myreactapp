import * as actionTypes from './actionTypes'


const initialState={
    products : [],
    loading: false,
    errorMessage:''
}

const fetchProductsReducer = (state=initialState, action) =>{
    switch(action.type){
        case actionTypes.FETCH_PRODUCTS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return{
                ...state,
                loading: false,
                products: action.payload,
                errorMessage: ''
            }
        case actionTypes.FETCH_PRODUCTS_FAIL:
            return{
                ...state,
                loading: false,
                products: [],
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default fetchProductsReducer