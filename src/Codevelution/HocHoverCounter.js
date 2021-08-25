import React, { Component } from 'react'
import HOC from './HOC'

export class HocClickCounter extends Component {
    render() {
        return (
            <div>
                <h3 onMouseOver={this.props.incrementCount}> Hovered {this.props.count} times</h3>
            </div>
        )
    }
}

export default HOC(HocClickCounter, 10)
