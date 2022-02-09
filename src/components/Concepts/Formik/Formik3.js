//Add formik touched id 
import React from 'react'
import {useFormik} from 'formik'

const validForm = data =>{
    const errors ={}

    if(!data.name){
        errors.name='enter name'
    }

    if(!data.number){
        errors.number='enter number'
    }else if(!/^[7-9]\d{9}$/i.test(data.number)){
        errors.number='invalid number'
    }

    if(!data.mail){
        errors.mail='enter mail'
    }else if(!/^([a-z0-9._-]+)@([a-z0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/i.test(data.mail)){
        errors.mail='ivnalid mail'
    }

    return errors
}

function Form() {
    const formik = useFormik({
        initialValues:{
            name:'',
            number:'',
            mail:''
        },
        validate:validForm,
        onSubmit: values=>{
            alert(JSON.stringify(values))
        }
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input type='text' name='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                {formik.touched.name && formik.errors.name ? formik.errors.name : null}
                <br/>
                <input type='number' name='number' value={formik.values.number} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                {formik.touched.number && formik.errors.number ? formik.errors.number : null}
                <br/>
                <input type='email' name='mail' value={formik.values.mail} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                {formik.touched.mail && formik.errors.mail ? formik.errors.mail : null}
                <br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form
