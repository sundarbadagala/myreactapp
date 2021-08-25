import { useFormik } from 'formik'
import React from 'react'

function Form4FormikEmail() {
    const formik= useFormik({
        initialValues:{
            email:''
        },
        onSubmit:values=>{
            alert(JSON.stringify.values)
        }
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input 
                    type='email' 
                    name='email' 
                    value={formik.values.email} 
                    onChange={formik.handleChange}
                />
                <button type='submit'>Click here</button>
            </form>
        </div>
    )
}

export default Form4FormikEmail
