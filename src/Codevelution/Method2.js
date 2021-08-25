import React, { Component } from 'react'
import TaskSub from './MethodSub'

export class Task extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg: 'Sundar'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(chlidName){
        //alert('Hi '+ this.state.msg + '! How are you?')
        alert(`Hi ${this.state.msg}! from ${chlidName}`)
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.msg}
                    <TaskSub wishMe={this.clickHandler}/>
                </h1>
            </div>
        )
    }
}

export default Task
