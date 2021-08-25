//Try to reduce the boiler code by using spread operator
import React from 'react'
import {useFormik} from 'formik'


const initialValues={
    name:'',
    number:'',
    mail:''
}

const validate = data =>{
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

const onSubmit=values=>{
    alert(JSON.stringify(values))
}


function Form() {
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit,
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input type='text' name='name' {...formik.getFieldProps('name')}/>
                {formik.touched.name && formik.errors.name ? formik.errors.name : null}
                <br/>
                <input type='number' name='number' {...formik.getFieldProps('number')}/>
                {formik.touched.number && formik.errors.number ? formik.errors.number : null}
                <br/>
                <input type='email' name='mail' {...formik.getFieldProps('mail')}/>
                {formik.touched.mail && formik.errors.mail ? formik.errors.mail : null}
                <br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form
