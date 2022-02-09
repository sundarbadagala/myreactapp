import React, {useReducer} from 'react'


const initialState = {
    firstCount : 0
}
const reducer = (state, action) =>{
    switch(action.type){
        case 'increment' : return {firstCount: state.firstCount+ action.value}
        case 'decrement' : return {firstCount: state.firstCount- action.value}
        case 'reset' : return initialState
        default: return state
    }

}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            {state.firstCount}<br/>
            <button onClick={()=>dispatch({type:'increment', value:1})}>Increment to 1</button>
            <button onClick={()=>dispatch({type:'decrement', value:1})}>Decrement to 1</button><br/>
            <button onClick={()=>dispatch({type:'increment', value:5})}>Increment to 5</button>
            <button onClick={()=>dispatch({type:'decrement', value:5})}>Decrement to 5</button><br/>
            <button onClick={()=>dispatch({type:'reset'})}>Rest</button>
        </div>
    )
}

export default Counter
