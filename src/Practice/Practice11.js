import React, { Component } from 'react'

export class Practice11 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:''
        }
    }
    changeHandler=(event)=>{
        const {name, value}= event.target
        this.setState({
            [name]: value
        })
    }
    clickHanlder=()=>{
        console.log(this.state.name)
    }
    render() {
        return (
            <div>
                <input type='text' name='name' value={this.state.name} onChange={this.changeHandler}/>
                <button onClick={this.clickHanlder}>console</button>
            </div>
        )
    }
}

export default Practice11
