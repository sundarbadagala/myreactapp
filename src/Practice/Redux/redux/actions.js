import { INCREMENT_VALUE, DECREMENT_VALUE } from "./actionType";

export const incrementValue=()=>{
    return{
        type:INCREMENT_VALUE
    }
}

export const decrementValue=()=>{
    return{
        type: DECREMENT_VALUE
    }
}