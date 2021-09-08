import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Comp2() {
    const [value, setValue]= useState([])
    useEffect(()=>{
        axios.get('https://api.spacexdata.com/v3/launches')
        .then(res => setValue(res.data))
        .catch(error => console.log(error))
    },[])
    return (
        <h1>
            {
                value.map(item => item.flight_number)
            }
        </h1>
    )
}

export default Comp2
