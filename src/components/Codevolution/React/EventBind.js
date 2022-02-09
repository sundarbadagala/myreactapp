import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(){
        super()
        this.state={
            msg: 'Hello world'
        }
    }
    clickHandler= ()=> {
        this.setState({
            msg: 'Bye World'
        })
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.msg}<br/>
                    <button onClick={this.clickHandler}>Click Here</button>
                </h1>
            </div>
        )
    }
}

export default EventBind
