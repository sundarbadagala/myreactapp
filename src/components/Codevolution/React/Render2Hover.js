import React, { Component } from 'react'

export class Render2Hover extends Component {
    render() {
        return (
            <div>
                <h3 onMouseOver={this.props.incrementCount}>Hovered {this.props.count} times</h3>
            </div>
        )
    }
}

export default Render2Hover
