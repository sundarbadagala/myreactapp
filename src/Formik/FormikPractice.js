import React from 'react'
import {Form, Field, Formik, ErrorMessage} from 'formik'


const initialValues={
    name:'',
    age:'',
    branch:''
}
const onSubmit= values=>{
    alert(JSON.stringify(values))
}
const validate= data=>{
    const errors={}
    if(!data.name){
        errors.name ='enter name'
    }
    if(!data.age){
        errors.age ='enter age'
    }
    if(!data.branch){
        errors.branch ='enter branch'
    }
    return errors
}

function FormikPractice() {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={validate}
        >
            <Form>
                <Field type='text' name='name' />
                <ErrorMessage name='name'/>                
                <br/>
                <Field type='text' name='age' />
                <ErrorMessage name='branch'/>
                <br/>
                <Field type='text' name='branch' />
                <ErrorMessage name='branch'/>
                <br/>
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default FormikPractice
