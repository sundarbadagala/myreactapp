import React, { Component } from 'react'

export class ClassCounterOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    componentDidMount(){
        document.title = `Ticked ${this.state.count} times`
    }
    componentDidUpdate(){
        document.title= `Bicked ${this.state.count} times`
    }
    
    render() {
        return (
            <div>
                Check the title bar <hr/>
                <button onClick={() => this.setState({count: this.state.count + 1})}>
                    Clicked {this.state.count} times
                </button>
            </div>
        )
    }
}

export default ClassCounterOne
