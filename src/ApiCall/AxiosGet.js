import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Asynch() {
    const [data, setData]=useState([])
    const [loading, setLoading]= useState(true)
    const [error, setError]= useState('')
    useEffect(()=>{
        axios.get('https://api.gihub.com/users')
            .then(res => {
                setData(res.data)
                setLoading(false)
                setError('')
            })
            .catch(error =>{
                setData([])
                setLoading(false)
                setError('Something is wrong')
            })
    },[])
    if(data.length < 0) return 'Loading...'
    return (
       <div>
        {
            loading ? <div>Loading....</div> : (error ? <div>{error}</div>  : data.map(item => <div>{item.login}</div>) )
        }
       </div>
    )
}

export default Asynch
