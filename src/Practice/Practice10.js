import React, { Component } from 'react'
//import Hover from './Practice10Sub'

export class Practice10 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             clickCount:0,
             hoverCount:0
        }
    }
    clickIncrement=()=>{
        this.setState(prevState=>{
            return{
                clickCount: prevState.clickCount+1,
                hoverCount: prevState.clickCount+1
            }
        })
    }
    render() {
        const {clickCount, hoverCount}= this.state
        return (
            <div>
                <button onClick={this.clickIncrement}>Clicked {clickCount} times</button>
                <h1 onMouseOver={this.clickIncrement}>Hovere {hoverCount} times</h1>
            </div>
        )
    }
}

export default Practice10
