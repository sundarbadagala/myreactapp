import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import Error from './Error'

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
                    
                </div>
                <div>
                    <label htmlFor='lastName'>Last Name</label>
                    <Field type='text' name='lastName' />
                    
                </div>
                <div>
                    <label htmlFor='email'>E Mail</label>
                    <Field type='text' name='email' />
                    
                </div>
                <div>
                    <label htmlFor='address'>Address</label>
                    <Field as='textarea' name='address' />
                    
                </div>
                <div>
                    <ErrorMessage name='firstName' component={Error}/>
                    <ErrorMessage name='lastName' component={Error}/>
                    <ErrorMessage name='email' component={Error}/>
                    <ErrorMessage name='address' component={Error}/>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>

            </Form>
        </Formik>
    )
}

export default Forms
