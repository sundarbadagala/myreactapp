import React, { Component } from 'react'

export class Practice11Hover extends Component {
    
    render() {
        return (
            <div>
            <h3 onMouseOver={this.props.incrementCount}>Hovered {this.props.count} times</h3>
            </div>
        )
    }
}

export default Practice11Hover

