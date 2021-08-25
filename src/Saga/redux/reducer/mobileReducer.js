import * as actionTypes from '../actions/acitonTypes'

const initialState={
    noOfMobiles:10
}

export const mobileReducer=(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.BUY_MOBILE_SUCCESS:
            return{
                ...state,
                noOfMobiles: state.noOfMobiles + 1
            }
        case actionTypes.SELL_MOBILE_SUCCESS:
            return{
                ...state,
                noOfMobiles : state.noOfMobiles - 1
            }
        default:
            return state
    }
}