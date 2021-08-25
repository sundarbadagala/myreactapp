import React, { Component } from 'react'

export class ConditionalRendering4 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogged:false
        }
    }
    
    render() {
        return (
            <div>
                Conditional rendering by Ternary operator method<hr/>
                {this.state.isLogged? 'You are Logged in':'You are no Logged in'}
            </div>
        )
    }
}

export default ConditionalRendering4
