import React from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'


const EmployeeComp = () =>{
    const formik = useFormik({
        initialValues:{
            id:'',
            name:'',
            location:'',
            salary:'',
            email:''
        },
        validationSchema:yup.object({
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
        }),
        onSubmit: values =>{
            alert(JSON.stringify(values))
        }
    })
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='id'>Employee ID</label>
                <input name='id' {...formik.getFieldProps('id')}/>
                {formik.touched.id && formik.errors.id ? <span style={{color:'red'}}>{formik.errors.id}</span> : null}<br/>

                <label htmlFor='name'>Employee Name</label>
                <input name='name' {...formik.getFieldProps('name')}/>
                {formik.touched.name && formik.errors.name ? <span style={{color:'red'}}>{formik.errors.name}</span> : null}<br/>

                <label htmlFor='location'>Employee Location</label>
                <input name='location' {...formik.getFieldProps('location')}/>
                {formik.touched.location && formik.errors.location ? <span style={{color:'red'}}>{formik.errors.location}</span> : null}<br/>

                <label htmlFor='salary'>Employee Salary</label>
                <input name='salary' {...formik.getFieldProps('salary')}/>
                {formik.touched.salary && formik.errors.salary ? <span style={{color:'red'}}>{formik.errors.salary}</span> : null}<br/>

                <label htmlFor='email'>Employee Email</label>
                <input name='email' {...formik.getFieldProps('email')}/>
                {formik.touched.email && formik.errors.email ? <span style={{color:'red'}}>{formik.errors.email}</span> : null}<br/>
                
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default EmployeeComp;