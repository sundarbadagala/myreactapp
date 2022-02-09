import React, { Component } from 'react'

export class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogged : false
        }
    }
    render() {
        if(this.state.isLogged){
            return(<di>Conditional redinderingn by if else condition <hr/>Yeah You are Logged in</di>)
        }
        else{
            return(<div>Conditional redinderingn by if else condition <hr/>You are not Logged in</div>)
        }
    }
}

export default ConditionalRendering
