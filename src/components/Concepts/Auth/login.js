import React, { useState } from "react";
import {auth} from './firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const changeHandler=(e)=>{
      const {name, value}= e.target
      setData({
          ...data,
          [name]: value
      })
  }
  const signUpHandler= async(e)=>{
      e.preventDefault()
      try {
        const user = await createUserWithEmailAndPassword(auth, data.email, data.password )
        console.log(user)
      } catch (error) {
          console.log(error)
      }
  }
  const signInHandler= async(e)=>{
    e.preventDefault()
    try {
      const user = await signInWithEmailAndPassword(auth, data.email, data.password )
      console.log(user)
    } catch (error) {
        console.log(error)
    }
}
  return (
    <center>
      <form autoComplete="off">
        <input
          type="email"
          placeholder="enter mail"
          name="email"
          value={data.email}
          onChange={(e)=>changeHandler(e)}
        />
        <br />
        <input
          type="password"
          placeholder="enter password"
          name="password"
          value={data.password}
          onChange={(e)=>changeHandler(e)}
        />
        <br />
        <button onClick={(e)=>signInHandler(e)}>Sign In</button> &nbsp; &nbsp;
        <button onClick={(e)=>signUpHandler(e)}>Sign Up</button>
      </form>
    </center>
  );
}
