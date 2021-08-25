import React from 'react'
import {Formik, Form, Field, ErrorMessage, FieldArray} from 'formik'
import Error from './Error'

const initialValues={
    firstName:'',
    lastName:'',
    email:'',
    address:'',
    social:{
        facebook:'',
        twitter:''
    },
    phoneNumbers:['',''],
    phNumber:['']
}


const onSubmit=(values)=>{
    console.log(JSON.stringify(values))
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
                    <ErrorMessage name='firstName' component={Error}/>
                </div>
                <div>
                    <label htmlFor='lastName'>Last Name</label>
                    <Field type='text' name='lastName' />
                    <ErrorMessage name='lastName' component={Error}/>
                </div>
                <div>
                    <label htmlFor='email'>E Mail</label>
                    <Field type='text' name='email' />
                    <ErrorMessage name='email' component={Error}/>
                </div>
                <div>
                    <label htmlFor='address'>Address</label>
                    <Field as='textarea' name='address' />
                    <ErrorMessage name='address' component={Error}/>
                </div>
                <div>
                    <label htmlFor='facebook'>Facebook</label>
                    <Field type='text' name='social.facebook' />
                    
                </div>
                <div>
                    <label htmlFor='twitter'>twitter</label>
                    <Field type='text' name='social.twitter' />
                    
                </div>
                <div>
                    <label htmlFor='primaryPh'>Primary Phone Number</label>
                    <Field type='number' name='phoneNumbers[0]'/>
                </div>
                <div>
                    <label htmlFor='secondaryPh'>Secondary Phone Number</label>
                    <Field type='number' name='phoneNumbers[1]'/>
                </div>
                <div>
                    <label htmlFor='phNumber '>Phone Numbers</label>
                    <FieldArray name='phNumber'>
                    {
                        fieldArrayProps =>{
                            console.log('Field Array props', fieldArrayProps)
                            const {form, push, remove}= fieldArrayProps
                            const {values}= form
                            const {phNumber} = values
                            return(
                                <div>
                                {
                                    phNumber.map((item, index)=> (
                                        <div key={index}>
                                            <Field type='text' name={`phNumber[${index}]`} placeholder={`${index+1} Phone Number`}/>
                                            {index>0 &&<button type='button' onClick={()=>remove(index)}>-</button>}
                                            <button type='button' onClick={()=>push('')}>+</button>
                                        </div>
                                    ))
                                }
                                </div>
                            )
                        }
                    }
                    </FieldArray>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </Form>
        </Formik>
    )
}

export default Forms
