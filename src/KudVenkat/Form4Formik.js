import React from 'react'
import {useFormik} from 'formik'

const EmployeeComp = () =>{
    const formik = useFormik({
        initialValues:{
            id:'',
            name:'',
            location:'',
            salary:''
        },
        onSubmit: values =>{
            alert(JSON.stringify(values))
        }
    })
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='id'>Employee ID</label>
                <input type='text' name='id' value={formik.values.id} onChange={formik.handleChange}/><br/>

                <label htmlFor='name'>Employee Name</label>
                <input type='text' name='name' value={formik.values.name} onChange={formik.handleChange}/><br/>

                <label htmlFor='location'>Employee Location</label>
                <input type='text' name='location' value={formik.values.location} onChange={formik.handleChange}/><br/>

                <label htmlFor='salary'>Employee Salary</label>
                <input type='text' name='salary' value={formik.values.salary} onChange={formik.handleChange}/><br/>
                
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default EmployeeComp;