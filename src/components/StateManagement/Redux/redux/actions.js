import { BUY_CAKE } from "./actionTypes";

export const buyCake=(count)=>{
    return{
        type: BUY_CAKE,
        payload:{
            count: count
        }
    }
}