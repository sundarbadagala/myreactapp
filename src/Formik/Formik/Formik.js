import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'

const initialValues={
    firstName:'',
    lastName:'',
    email:'',
    address:''
}


const onSubmit=(values)=>{
    alert(JSON.stringify(values))
}

const validate=(data)=>{
    const errors={}

    if(!data.firstName){
        errors.firstName = 'first name required'
    }else if(!data.lastName){
        errors.lastName='last name required'
    }else if(!data.email){
        errors.email='email required'
    }else if(!data.address){
        errors.address='address required'
    }

    return errors
}
function Forms() {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={validate}
        >
            <Form>
                <div>
                    <label htmlFor='firstName'>Fist Name</label>
                    <Field type='text' name='firstName' />
                    <ErrorMessage name='firstName'/>
                </div>
                <div>
                    <label htmlFor='lastName'>Last Name</label>
                    <Field type='text' name='lastName' />
                    <ErrorMessage name='lastName'/>
                </div>
                <div>
                    <label htmlFor='email'>E Mail</label>
                    <Field type='text' name='email' />
                    <ErrorMessage name='email'/>
                </div>
                <div>
                    <label htmlFor='address'>Address</label>
                    <Field type='text' name='address' />
                    <ErrorMessage name='address'/>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </Form>
        </Formik>
    )
}

export default Forms
