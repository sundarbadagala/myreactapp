import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Error from './Error'

function Asynch() {
    const [data, setData]=useState([])
    const [loading, setLoading]= useState(true)
    const [error, setError]= useState('')
    useEffect(()=>{
        axios.get('https://api.github.com/user')
            .then(res => {
                setData(res.data)
                setLoading(false)
                setError('')
            })
            .catch(error =>{
                setData([])
                setLoading(false)
                setError(error.message)
            })
    },[])
    
    return (
       <div>
        {
            loading ? <Loading/> : (error ? <Error error={error}/>  : data.map(item => <div>{item.login}</div>) )
        }
       </div>
    )
}

export default Asynch
