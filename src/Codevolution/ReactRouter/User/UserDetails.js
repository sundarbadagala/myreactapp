import React from 'react'
import {useParams} from 'react-router-dom'

export default function UserDetails() {
    const {userId} = useParams()
    return (
        <h5>
            user details of <spa style={{color:'red'}}> {userId} </spa>
        </h5>
    )
}
