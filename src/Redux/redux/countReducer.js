import { DECREMENT_VALUE, INCREMENT_VALUE } from "./actionTypes"

const initialState={
    count:0
}

export const countReducer=(state=initialState, action)=>{
    switch(action.type){
        case INCREMENT_VALUE:
            return{count: state.count+1}
        case DECREMENT_VALUE:
            return{count: state.count-1}
        default:
            return state
    }
}
