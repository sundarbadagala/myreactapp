import React from 'react'
import {ErrorMessage, Field, Formik, useFormik} from 'formik'
import * as yup from 'yup'


const EmployeeComp = () =>{
    return(
        <Formik initialValues = {{
            id:'',
            name:'',
            location:'',
            salary:'',
            email:'',
            designation:''
        }}
        validationSchema = {yup.object({
            id: yup
                .string()
                .required('Please enter your ID'),
            name: yup
                .string()
                .max(20,' name should be below 20 chars')
                .required('Please enter your name'),
            location:yup
                .string()
                .required('Please enter email'),
            salary:yup
                .string()
                .required('Please enter Salary'),
            email: yup
                .string()
                .email('your mail is invlid')
                .required('Please enter your mail')
        })}
        onSubmit = {values =>{
            alert(JSON.stringify(values))
        }}>
        {
            props =>(
            <div>
                <form onSubmit={Formik.onSubmit}> 
                    <label>Employee ID: </label>
                        <Field type='text' name='id'/>
                            <ErrorMessage name='id'/><br/>

                    <label>Employee Name: </label>
                        <Field type='text' name='name'/>
                            <ErrorMessage name='name'/><br/>

                    <label>Employee Location: </label>
                        <Field type='text' name='location'/>
                            <ErrorMessage name='location'/><br/>

                    <label>Employee Salary: </label>
                        <Field type='text' name='salary'/>
                            <ErrorMessage name='salary'/><br/>

                    <label>Employee Email: </label>
                        <Field type='email' name='email'/>
                            <ErrorMessage name='email'/><br/>

                    <label>Employee Designation: </label>
                        <Field as='select' name='designation'>
                            <option value='softwareEngineer'>Software Engineer</option>
                            <option value='electricalEngineer'>Electrical Engineer</option>
                            <option value='civilEngineer'>Civil Engineer</option>
                        </Field>
                            <ErrorMessage name='designation'/><br/>
                    <button type='submit' disabled={!props.isValid}>SUBMIT</button>
                </form> 
            </div>
            )
        }
        </Formik>
    )
}

export default EmployeeComp;