import {DECREMENT_VALUE, INCREMENT_VALUE} from './actionTypes'

export const incrementValue=()=>{
    return{
        type:INCREMENT_VALUE
    }
}

export const decrementValue=()=>{
    return{
        type:DECREMENT_VALUE
    }
}