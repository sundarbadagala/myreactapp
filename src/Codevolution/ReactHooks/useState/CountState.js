import React from 'react'

class Count extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    incrementCount=()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                Counting by State method <hr/>
                <button onClick={this.incrementCount}>Clicked {this.state.count} times</button>
            </div>
        )
    }
}

export default Count