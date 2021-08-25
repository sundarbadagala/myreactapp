import React, { Component } from 'react'
import './Form.css'

export class Form extends Component {
    render() {
        return (
            <div className='main'>
            <div className='wrapper'>
                <h1>Create Account</h1>
                <div className='form-wrapper'>
                    <div className='firstName'>
                        <label htmlFor='firstName'>First Name</label>
                        <input type='text' className='' name='firstName' placeholder='First Name' onChange={this.handleChange}/>
                    </div>
                    <div className='lastName'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input type='text' className='' name='lastName' placeholder='Last Name' onChange={this.handleChange}/>
                    </div>
                    <div className='email'>
                        <label htmlFor='email'>E mail</label>
                        <input type='text' className='' name='email' placeholder='E mail' onChange={this.handleChange}/>
                    </div>
                    <div className='password'>
                        <label htmlFor='password'>Password</label>
                        <input type='text' className='' name='password' placeholder='Password' onChange={this.handleChange}/>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Form
