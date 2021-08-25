import React, { Component } from 'react'

export class Todos extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:[]
        }
    }
    addValue=()=>{
        this.setState({
            ...name,
            name: 
        })
    }
    render() {
        return (
            <div>
                hello world
                <input 
                    type='text' 
                    name='name' 
                    value={this.state.name}
                    onChange={(e)=>this.setState({name: e.target.value})}
                />
                <button onClick={this.addValue}>Add</button>
                {this.state.name}
            </div>
        )
    }
}

export default Todos
