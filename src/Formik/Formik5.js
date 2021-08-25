//change useFormik to Formik, Form, Field. ErrorMessage
import React from 'react'
import {ErrorMessage, Field, Formik, Form} from 'formik'


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


function Forming() {
    return (
        <div>
            <h1>Most important</h1>
            <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={validate}
            >
                <Form>
                    <Field type='text' name='name'/>
                    <ErrorMessage name='name'/>
                    <br/>
                    <Field type='number' name='number'/>
                    <ErrorMessage name='number'/>
                    <br/>
                    <Field type='email' name='mail'/>
                    <ErrorMessage name='mail'/>
                    <br/>
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Forming
