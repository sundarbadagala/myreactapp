import React from 'react'
import {useFormik} from 'formik'

const validForm = data =>{
    const errors={}

    if(!data.firstName){
        errors.firstName='please enter first Name'
    }
    else if(!data.lastName){
        errors.lastName='please enter last Name'
    }
    else if(!data.number){
        errors.number='please enter mobile Number'
    }else if(!/^[7-9]\d{9}$/i.test(data.number)){
        errors.number='invalid mobile number'
    }
    else if(!data.mail){
        errors.mail='please enter ur email'
    }else if(!/^([a-z0-9\.]+)@([a-z0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/i.test(data.mail)){
        errors.mail='mail is invalid'
    }
    else if(!data.password){
        errors.password='please enter password'
    }else if(data.password.length < 6){
        errors.password='password is too short'
    }
    else if(data.confirmPassword !== data.password){
        errors.confirmPassword='password doesnt match'
    }

    return errors 

}

function Form() {
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
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input 
                    type='text' 
                    name='firstName' 
                    value={formik.values.firstName} 
                    onChange={formik.handleChange}
                    placeholder='First Name'
                />
                {formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : null}<br/>
                <input 
                    type='text' 
                    name='lastName' 
                    value={formik.values.lastName} 
                    onChange={formik.handleChange}
                    placeholder='Last Name'
                />
                {formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : null}<br/>
                <input 
                    type='number' 
                    name='number' 
                    value={formik.values.number} 
                    onChange={formik.handleChange}
                    placeholder='Phone Number'
                />
                {formik.touched.number && formik.errors.number ? formik.errors.number : null}<br/>
                <input 
                    type='email' 
                    name='mail' 
                    value={formik.values.mail} 
                    onChange={formik.handleChange}
                    placeholder='Mail'
                />
                {formik.touched.mail && formik.errors.mail ? formik.errors.mail : null}<br/>
                <input 
                    type='password' 
                    name='password' 
                    value={formik.values.password} 
                    onChange={formik.handleChange}
                    placeholder='Password'
                />
                {formik.touched.password && formik.errors.password ? formik.errors.password : null}<br/>
                <input 
                    type='password' 
                    name='confirmPassword' 
                    value={formik.values.confirmPassword} 
                    onChange={formik.handleChange}
                    placeholder='Confirm Password'
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : null}<br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form

