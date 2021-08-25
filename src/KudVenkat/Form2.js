import React, { Component } from 'react'

export class Form2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id:'',
             name:'',
             location:'',
             salary:''
        }
    }
    changeHandler=(event)=>{
        const {name, value}= event.target
        this.setState({
            [name]:value
        })
    }
    clickHandler=()=>{
        console.log(this.state)
    }
    render() {
        return (
            <div>
                Employee ID: <input type='text' name='id' value={this.state.id} onChange={this.changeHandler}/><br/>
                Employee Name:<input type='text' name='name' value={this.state.name} onChange={this.changeHandler}/><br/>
                Employee Location:<input type='text' name='location' value={this.state.location} onChange={this.changeHandler}/><br/>
                Employee Salary:<input type='text' name='salary' value={this.state.salary} onChange={this.changeHandler}/><br/>
                <button onClick={this.clickHandler}>Console</button>
            </div>
        )
    }
}

export default Form2
