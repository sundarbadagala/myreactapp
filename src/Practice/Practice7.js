import React, { Component } from 'react';
import updatedComp from './Practice7Sub';

export class Practice7 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    incrementValue=()=>{
        this.setState({
            count: this.state.count+1
        })
    }
    render() {
        const {count}= this.state;
        return (
            <div>
                Higher order Component<br/>
                <button onClick={this.incrementValue}>{this.props.name} Clicked {count} times</button>
            </div>
        )
    }
}

export default updatedComp(Practice7)
