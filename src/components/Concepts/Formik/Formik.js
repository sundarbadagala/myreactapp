import React from 'react'
import {useFormik} from 'formik'

function Form() {
    const formik = useFormik({
        initialValues:{
            name:'',
            number:'',
            mail:''
        },
        onSubmit: values=>{
            alert(JSON.stringify(values))
        }
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input type='text' name='name' value={formik.values.name} onChange={formik.handleChange}/><br/>
                <input type='number' name='number' value={formik.values.number} onChange={formik.handleChange}/><br/>
                <input type='email' name='mail' value={formik.values.mail} onChange={formik.handleChange}/><br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form
