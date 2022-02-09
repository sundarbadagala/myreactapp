import React, { Component } from 'react'

export class ClassIncrement extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    componentDidMount(){
        this.clearInterval= setInterval(()=>{
            this.setState({
                count: this.state.count+1
            })
        }, 1000)
    }
    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
            </div>
        )
    }
}

export default ClassIncrement
