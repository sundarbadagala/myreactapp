import React, {useReducer} from 'react'


const initialState = 0
const reducer = (state, action) =>{
    switch(action){
        case 'increment' : return (state + 1)
        case 'decrement' : return (state - 1)
        case 'reset' : return initialState
        default: return state
    }

}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            {state}<br/>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Rest</button>
        </div>
    )
}

export default Counter
