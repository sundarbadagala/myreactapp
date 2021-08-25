import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'

const initialValues={
    name:'',
    number:'',
    branch:'',
    comments:'',
    address:''
}
const onSubmit=values=>{
    alert(JSON.stringify(values))
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
    if(!data.comments){
        errors.comments='enter comments'
    }
    if(!data.address){
        errors.address='enter address'
    }

    return errors
}
function FormikPractice() {
    return (
        <div>
            <h1>Field revisited</h1>
            <h3>Add text area section by using Field instead of input</h3>
            <h3>Address input coded in revisited method</h3>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validate={validate}
            >
                <Form>
                    <Field type='text' id='name' name='name'/>
                    <span style={{color:'red'}}><ErrorMessage name='name'/></span>
                    <br/>
                    <Field type='text' id='number' name='number'/>
                    <ErrorMessage name='number'/>
                    <br/>
                    <Field type='text' id='branch' name='branch'/>
                    <ErrorMessage name='branch'/>
                    <br/>
                    {

                        //Main Part starts from here

                    }
                    <Field as='textarea' id='comments' name='comments' placeholder='text Area'/>
                    <br/>
                    <Field name='address'>
                    {
                        (props)=>{
                            const {field, meta}= props
                            return <div>
                            <input type='text'   placeholder='address' {...field}/>
                            {meta.touched && meta.error ? meta.error : null}
                            </div>
                        }
                    }
                    </Field><br/>
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default FormikPractice
