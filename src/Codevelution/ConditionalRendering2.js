import React, { Component } from 'react'

export class ConditionalRendering2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLog:false
        }
    }
    checkCondition=()=>{
        if(this.state.isLog) return 'You are Logged in'
        return'You are not logged in'
    }
    render() {
        return (
            <div>
                Condition rendering by using if else condtion and individual method<hr/>
                {this.checkCondition()}
            </div>
        )
    }
}

export default ConditionalRendering2
