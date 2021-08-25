import React, { Component } from 'react'
import HOC from './HOCMain'

export class HocHover extends Component {
    render() {
        return (
            <div>
                <h3 onMouseOver={this.props.incrementCount}> Hovered {this.props.count} times</h3>
            </div>
        )
    }
}

export default HOC(HocHover, 5)
