import React, {useReducer} from 'react'


const initialState = {
    firstCount : 0,
    secondCount : 100
}
const reducer = (state, action) =>{
    switch(action.type){
        case 'increment' : return {...state, firstCount: state.firstCount+ action.value}
        case 'decrement' : return {...state, firstCount: state.firstCount- action.value}

        case 'incrementTwo' : return {...state, secondCount: state.secondCount+ action.value}
        case 'decrementTwo' : return {...state, secondCount: state.secondCount- action.value}

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
            <button onClick={()=>dispatch({type:'reset'})}>Rest</button><br/>
            {state.secondCount}<br/>
            <button onClick={()=>dispatch({type:'incrementTwo', value:1})}>Increment to 1</button>
            <button onClick={()=>dispatch({type:'decrementTwo', value:1})}>Decrement to 1</button><br/>
            <button onClick={()=>dispatch({type:'incrementTwo', value:5})}>Increment to 5</button>
            <button onClick={()=>dispatch({type:'decrementTwo', value:5})}>Decrement to 5</button><br/>
            <button onClick={()=>dispatch({type:'reset'})}>Rest</button><br/>
        </div>
    )
}

export default Counter
