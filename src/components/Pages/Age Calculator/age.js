import React, { useState } from 'react'

function Age() {
    const [age, setAge]= useState('')
    const changeHandler=(e)=>{
        setAge(e.target.value)
    }
    const today= new Date()
    console.log('present day',today)
    let birthday = new Date(age) 
    console.log('birth day',birthday)
    console.log(Math.floor(today/1000))
    console.log(Math.floor(birthday/1000))
    let value= Math.floor(today/1000) - Math.floor(birthday/1000) 
    console.log(value)
    let days= Math.floor(value/(3600*24))
    console.log(days)
    console.log(days/365)
    console.log(days%365)

    return (
        <div className='container mt-4 p-4 alert alert-primary text-center'>
            <form className='border border-primary p-3 rounded'>
                <label htmlFor='age' className='mx-3'>Enter Your Date of Birth</label>
                <input type='date' id='age' name='age' onChange={(e)=>changeHandler(e)}/>
            </form>
            <div className='font-weight-bold font-italic text-danger mt-4'>
                Your Age is {Math.floor(days/365)} Years and {days%365} Day
            </div>
        </div>
    )
}

export default Age
