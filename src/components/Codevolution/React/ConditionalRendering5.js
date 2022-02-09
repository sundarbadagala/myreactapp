import React, { Component } from 'react'

export class ConditionalRendering5 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogged:true
        }
    }
    
    render() {
        return (
            <div>
                Conditional rendering by Short circuit method<hr/>
                {this.state.isLogged && <di>You are logged in</di>}
            </div>
        )
    }
}

export default ConditionalRendering5
