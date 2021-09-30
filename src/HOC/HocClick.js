import React, { Component } from 'react'
import HOC from './HOCMain'

export class HocClick extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.incrementCount}>{this.props.name} Clicked {this.props.count} times</button>
            </div>
        )
    }
}

export default HOC(HocClick, 8)
