import React, { Component } from 'react'

export class This extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'VIJAY'
        }
        this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            name:'KUMAR'
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>
                    {this.state.name}
                </button>
            </div>
        )
    }
}

export default This
