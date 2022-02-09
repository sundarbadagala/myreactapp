import React from 'react'
import {useFormik} from 'formik'
import './Form4.css'

const validForm=data=>{
    const errors={}

    if(!data.firstName){
        errors.firstName='please enter ur first name'
    }else if(!data.lastName){
        errors.lastName='please enter ur last name'
    }else if(!data.number){
        errors.number='please enter ur number'
    }else if(!/^[7-9]\d{9}$/i.test(data.number)){
        errors.number='invalid phone number'
    }else if(!data.mail){
        errors.mail='enter ur mail'
    }else if(!/^([a-z0-9\.-]+)@([a-z0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/i){
        errors.mail='invalid mail'
    }else if(!data.password){
        errors.password='please enter ur password'
    }else if(data.password.length <6 ){
        errors.password='password is too short'
    }else if(data.confirmPassword !== data.password){
        errors.confirmPassword="password doesn't match"
    }

    return errors
}

function Form4() {
    const formik= useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            number:'',
            mail:'',
            password:'',
            confirmPassword:''
        },
        validate: validForm,
        onSubmit: values=>{
            alert(JSON.stringify(values))
        }
    })
    return (
        <div className='main'>
            <form onSubmit={formik.handleSubmit}>
                <input type='text' name='firstName' value={formik.values.firstName} onChange={formik.handleChange} placeholder='firstName' className='firstName'/>
                <input type='text' name='lastName' value={formik.values.lastName} onChange={formik.handleChange} placeholder='lastName' className='lastName'/><br/>
                <input type='text' name='number' value={formik.values.number} onChange={formik.handleChange} placeholder='number'/><br/>
                <input type='text' name='mail' value={formik.values.mail} onChange={formik.handleChange} placeholder='mail'/><br/>
                <input type='text' name='password' value={formik.values.password} onChange={formik.handleChange} placeholder='password'/><br/>
                <input type='text' name='confirmPassword' value={formik.values.confirmPassword} onChange={formik.handleChange} placeholder='confirmPassword'/><br/>
                <span>
                    {formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : null}
                    {formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : null}
                    {formik.touched.number && formik.errors.number ? formik.errors.number : null}
                    {formik.touched.mail && formik.errors.mail ? formik.errors.mail : null}
                    {formik.touched.password && formik.errors.password ? formik.errors.password : null}
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : null}
                </span>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form4
