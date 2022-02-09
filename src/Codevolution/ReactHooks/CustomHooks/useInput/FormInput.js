import React from 'react'
import useInput from './useInput'

function FormInput() {
   
    const [firstName, bindFirstName, resetFirstName]= useInput('')
    const [lastName, bindLastName, resetLastName]= useInput('')

    const submitHandler=(e)=>{
        e.preventDefault()
        alert(`hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                First name: <input type='text' {...bindFirstName}/><br/>
                Last name: <input type='text' {...bindLastName}/><br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormInput
