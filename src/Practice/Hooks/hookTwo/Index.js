import React from 'react'
import useInput from './useInput'

function FormInput() {
   
    const [firstName, bindFirstName]= useInput('')
    const [lastName, bindLastName]= useInput('')

    const submitHandler=(e)=>{
        e.preventDefault()
        alert(`hello ${firstName} ${lastName}`)
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
