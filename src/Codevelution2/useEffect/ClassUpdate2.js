import React, { Component } from 'react'

export class ClassCounterOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             name:''
        }
    }
    componentDidMount(){
        document.title = `Ticked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            console.log('data updated')
            document.title= `Bicked ${this.state.count} times`
        }
    }
    
    render() {
        return (
            <div>
                Check console <hr/>
                <input type='text' name='name' value={this.state.name} onChange={e => this.setState({ name: e.target.value})}/>
                <button onClick={() => this.setState({count: this.state.count + 1})}>
                    Clicked {this.state.count} times
                </button>
                {this.state.name}
            </div>
        )
    }
}

export default ClassCounterOne
