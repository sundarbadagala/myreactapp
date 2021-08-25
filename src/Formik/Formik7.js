/* eslint-disable no-unused-expressions */
import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'

const initialValues={
    name:'',
    number:'',
    branch:'',
    social:{
        facebook:'',
        twitter:''
    }
}
const onSubmit=values=>{
    console.log(values)
}
const validate= data =>{
    const errors={}

    if(!data.name){
        errors.name='enter name'
    }
    if(!data.number){
        errors.number='enter number'
    }
    if(!data.branch){
        errors.branch='enter branch'
    }

    return errors
}
function FormikPractice() {
    return (
        <div>
            <h1>Nested Object Fields</h1>
            <h3>submit values in Objects</h3>
            <h4>check console</h4>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                // validate={validate}
            >
                <Form>
                    <Field type='text' id='name' name='name' placeholder='name'/>
                    <br/>
                    <Field id='number' name='number' placeholder='number'/>
                    <br/>
                    <Field type='text' id='branch' name='branch' placeholder='branch'/>
                    <br/>
                    {
                        //Nested Field Objects
                    }
                    <Field type='text' id='social' name='social.facebook' placeholder='facebook'/><br/>
                    <Field type='text' id='social' name='social.twitter' placeholder='twitter'/>
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}


export default FormikPractice
