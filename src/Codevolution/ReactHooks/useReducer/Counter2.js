import React, {useReducer} from 'react'


const initialState = {
    firstCount : 0
}
const reducer = (state, action) =>{
    switch(action.type){
        case 'increment' : return {firstCount: state.firstCount+1}
        case 'decrement' : return {firstCount: state.firstCount-1}
        case 'reset' : return initialState
        default: return state
    }

}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            {state.firstCount}<br/>
            <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
            <button onClick={()=>dispatch({type:'reset'})}>Rest</button>
        </div>
    )
}

export default Counter
