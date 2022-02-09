import React, { Component } from 'react'

export class ConditionalRendering3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogged:false
        }
    }
    
    render() {
        let message
        if(this.state.isLogged){
            message=<div>You are logged in</div>
        }
        else{
            message=<div>You are not logged in</div>
        }
        return (
            <div>
                Conditional rendering by element method<hr/>
                {message}
            </div>
        )
    }
}

export default ConditionalRendering3
