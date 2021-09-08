import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchData} from '../redux/actions/actions'

const style={
    border:'1px solid black',
    margin:'2px',
    backgroundColor:'yellow',
    padding:'2px 5px'
}

function Details() {
    const data = useSelector(state => state.data.users)
    // const error = useSelector(state => state.data.error)
    // const isLoading = useSelector(state => state.data.isLoading)
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(fetchData())
    },[])
    // console.log(isLoading)
    // console.log(error)
    // console.log(data)
    return (
        <ul>
            {
               data.map(item => 
                <button key={item.flight_number} style={style}>
                    {item.mission_name}
                </button>
                )
            }
        </ul>
    )
}

export default Details
