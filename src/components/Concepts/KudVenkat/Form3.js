import React, { Component } from 'react'

export class Form4Formik extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id:'',
             name:'',
             salary:'',
             location:''
        }
    }
    changeHandler=(e)=>{
        const {name, value}= e.target
        this.setState({
            [name]:value
        })
    }
    submitHandler=(e)=>{
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        const {id, name, location, salary} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                User ID: <input type='text' name='id' value={id} onChange={this.changeHandler}/><br/>
                User Name: <input type='text' name='name' value={name} onChange={this.changeHandler}/><br/>
                User Location: <input type='text' name='location' value={location} onChange={this.changeHandler}/><br/>
                User Salary: <input type='text' name='salary' value={salary} onChange={this.changeHandler}/><br/>
                <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form4Formik
