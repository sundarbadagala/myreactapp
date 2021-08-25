import { BUY_CAKE } from "./actionTypes";

const initialState={
    numberOfCakes : 20
}

export const cakesReducer=(state=initialState, action)=>{
    switch(action.type){
        case BUY_CAKE:
            return{ numberOfCakes : state.numberOfCakes - action.payload.count}
        default:
            return state
    }

}
