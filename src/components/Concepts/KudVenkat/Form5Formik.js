import React from 'react'
import {useFormik} from 'formik'

const validateEmp = empData =>{
    const errors={}

    if(!empData.id){
        errors.id='id enter cheyraa saami'
    }

    if(!empData.name){
        errors.name= 'name enter cheyraa jaffa'
    }else if(empData.name.length > 20){
        errors.name='anthe pedda name entra needi <20'
    }

    if(!empData.location){
        errors.location='neeku ooru peru ledentraa'
    }

    if(!empData.salary){
        errors.salary='salary ivvatleda neeku'
    }

    if(!empData.email){
        errors.email='update avvandraa email create cheskondraa'
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.email)){
        errors.email='mail enter cheydam kuda radentra'
    }
    return errors
}

const EmployeeComp = () =>{
    const formik = useFormik({
        initialValues:{
            id:'',
            name:'',
            location:'',
            salary:'',
            email:''
        },
        validate:validateEmp,
        onSubmit: values =>{
            alert(JSON.stringify(values))
        }
    })
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='id'>Employee ID</label>
                <input type='text' name='id' value={formik.values.id} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                {formik.touched.id && formik.errors.id ? <span style={{color:'red'}}>{formik.errors.id}</span> : null}<br/>

                <label htmlFor='name'>Employee Name</label>
                <input type='text' name='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                {formik.touched.name && formik.errors.name ? <span style={{color:'red'}}>{formik.errors.name}</span> : null}<br/>

                <label htmlFor='location'>Employee Location</label>
                <input type='text' name='location' value={formik.values.location} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                {formik.touched.location && formik.errors.location ? <span style={{color:'red'}}>{formik.errors.location}</span> : null}<br/>

                <label htmlFor='salary'>Employee Salary</label>
                <input type='text' name='salary' value={formik.values.salary} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                {formik.touched.salary && formik.errors.salary ? <span style={{color:'red'}}>{formik.errors.salary}</span> : null}<br/>

                <label htmlFor='email'>Employee Email</label>
                <input type='text' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                {formik.touched.email && formik.errors.email ? <span style={{color:'red'}}>{formik.errors.email}</span> : null}<br/>
                
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default EmployeeComp;