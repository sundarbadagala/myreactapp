import React from 'react'
import {useNavigate} from 'react-router-dom'

function Final() {
    const navigate = useNavigate()
    return (
        <h1>
            This is final page
            <button onClick={()=>navigate(-1)}>Go Back</button>
        </h1>
    )
}

export default Final
