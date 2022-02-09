import React from 'react'
import {useNavigate} from 'react-router-dom'

function SuccessComp() {
    const navigate = useNavigate()
    return (
        <h1>
            Successfully Submitted
            <button onClick={()=>navigate(-1)}>Go Back</button>
        </h1>
    )
}

export default SuccessComp
