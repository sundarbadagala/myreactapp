import React from 'react'
import {useAuth} from '../auth'
import {useNavigate} from 'react-router-dom'

function Profile() {
    const auth = useAuth()
    const navigate = useNavigate()
    const handleLogout=()=>{
        auth.logout()
        navigate('/login')
    }
    return (
        <div>
           Welcome! {auth.user} <br/>
           <button onClick={handleLogout}>Log out</button>
        </div>
    )
}

export default Profile
