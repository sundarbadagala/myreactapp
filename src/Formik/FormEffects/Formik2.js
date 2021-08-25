import React from 'react'
import {Formik, Form, ErrorMessage, Field} from 'formik'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'


const initialValues={
    firstName: '',
    lastName:'',
    email:'',
    number:'',
    city:'',
    state:'',
    pinCode:'',
    address:''
}

const validate=(data)=>{
    const errors={}

    if(!data.firstName){
        errors.firstName = 'Enter Your First Name'
    }else if(!data.lastName){
        errors.lastName = 'Enter Your Last Name'
    }else if(!data.number){
        errors.number = 'Enter Your Number'
    }else if(!/^[7-9]\d{9}$/i.test(data.number)){
        errors.number = 'Invalid Number'
    }else if(!data.email){
        errors.email= 'Enter Your Mail'
    }else if(!/^([a-z0-9._-]+)@([a-z0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/i.test(data.mail)){
        errors.mail='Invalid mail'
    }else if(!data.state){
        errors.state='Enter Your State'
    }else if(!data.city){
        errors.city= 'Enter Your City'
    }else if(!data.pinCode){
        errors.pinCode = 'Enter Your Pin Code'
    }else if(!data.address){
        errors.address = 'Enter Your Address'
    }


    return errors
}

const onSubmit=(values)=>{
    alert(JSON.stringify(values))
}

function Forms() {
    return (
        <Container>
        <Card style={{width:'500px'}}>
        <Card.Header className='text-center p-1'><h4>Form submision</h4></Card.Header>
        <Card.Body>
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
        >
            <Form>
            <Row>
                <Col className='p-1' md={6}>
                <label htmlFor='firstName'>First Name</label>
                <Field type='text' name='firstName' placeholder='first Name' className='p-1 border rounded' style={{width:'100%'}}/>
                </Col>
                <Col className='p-1' md={6}>
                <label htmlFor='lastName'>Last Name</label>
                <Field type='text' name='lastName' placeholder='Last Name'  className='p-1 border rounded' style={{width:'100%'}}/>
                </Col>
            </Row>
            <Row>
                <Col className='p-1' md={6}>
                <label htmlFor='email'>E Mail</label>
                <Field type='text' name='email' placeholder='E Mail' className='p-1 border rounded' style={{width:'100%'}}/>
                </Col>
                <Col className='p-1' md={6}>
                <label htmlFor='number'>Number</label>
                <Field type='text' name='number' placeholder='Number'  className='p-1 border rounded' style={{width:'100%'}}/>
                </Col>
            </Row>
            <Row>
                <Col className='p-1' md={4} >
                <label htmlFor='city'>City</label>
                <Field type='text' name='city' placeholder='City' className='p-1 border rounded' style={{width:'100%'}}/>
                </Col>
                <Col className='p-1' md={4}>
                <label htmlFor='state'>State</label>
                <Field type='text' name='state' placeholder='State'  className='p-1 border rounded' style={{width:'100%'}}/>
                </Col>
                <Col className='p-1' md={4}>
                <label htmlFor='pinCode'>PinCode</label>
                <Field type='text' name='pinCode' placeholder='PinCode'  className='p-1 border rounded' style={{width:'100%'}}/>
                </Col>
            </Row>
            <Row>
                <Col className=' p-1' md={12}>
                <label htmlFor='address'>Address</label><br/>
                <Field type='text' name='address' placeholder='Address' className='p-1 border rounded' style={{width:"100%"}}/>
            </Col>
            </Row>
            <Row>
                <Col>
                    <span><ErrorMessage name='firstName'/></span>
                    <span><ErrorMessage name='lastName'/></span>
                    <span><ErrorMessage name='email'/></span>
                    <span><ErrorMessage name='number'/></span>
                    <span><ErrorMessage name='city'/></span>
                    <span><ErrorMessage name='state'/></span>
                    <span><ErrorMessage name='pinCode'/></span>
                    <span><ErrorMessage name='address'/></span>
                </Col>
            </Row>
            <Row>
                <Col className='m-1 p-0'>
                <Button block type='submit' className=''>Submit</Button>
                </Col>
            </Row>
            </Form>
        </Formik>
        </Card.Body>
        </Card>
        </Container>
    )
}

export default Forms
