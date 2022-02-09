import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import {useAuth} from '../auth'

function LoginPage() {
    const [user, setUser]= useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    
    const handleLogin=()=>{
        
        auth.login(user)
        navigate('/', {replace:true})
    }
    return (
        <div>
            <form>
            <label>
                User Name : <input type='text' placeholder='Enter Username' onChange={(e)=>setUser(e.target.value)}/>
            </label>
            <button onClick={handleLogin}>Submit</button>
            </form>
        </div>
    )
}

export default LoginPage
