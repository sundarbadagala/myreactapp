const initialState={
    noOfMobiles:10
}

export const mobileReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'SELL_MOBILE_SUCCESS':
            return{...state, noOfMobiles: state.noOfMobiles - 1}
        case 'BUY_MOBILE_SUCCESS':
            return{...state, noOfMobiles: state.noOfMobiles + 1}
        default:
            return state
    }
}