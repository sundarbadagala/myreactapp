import React,{useEffect, useState} from 'react'
import Login from './login'
import Home from './home'
import {auth} from './firebase'

export default function Index() {
    const [presentUser, setPresentUser] = useState(null)
    useEffect(()=>{
        auth.onAuthStateChanged(user =>{
            if(user){
                setPresentUser({
                    uid: user.uid,
                    email: user.email
                })
            }else{
                setPresentUser(null)
            }
        })
    },[])
    return (
        <div>
            {
                presentUser ? <Home/> : <Login/>
            }
        </div>
    )
}
