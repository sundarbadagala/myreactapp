import Axios from 'axios'
import React, {useReducer, useEffect} from 'react'

const initialState={
    loading: true,
    error:'',
    post:{}
}
const reducer = (state, action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS': return{
            loading: false,
            post:action.value,
            error:''
        }
        case 'FETCH_FAILURE': return{
            loading: false,
            post : {},
            error: 'Incorrect URL...'
        }
        default : return state
    }
}

function DataFetching2() {
    const [state, dispatch]= useReducer(reducer, initialState)

    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            dispatch({
                type:'FETCH_SUCCESS',
                value:response.data
            })
        })
        .catch(error =>{
            dispatch({
                type:'FETCH_FAILURE',
            })
        })
    },[])

    return (
        <div>
            {state.loading ? 'Page is loading...': state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetching2
