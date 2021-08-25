import React, { Component } from 'react'

export class Practice10Sub extends Component {
    render() {
        return (
            <div>
                <h3 onMouseOver={this.props.hover}>Hovered {this.props.count} times</h3>
            </div>
        )
    }
}

export default Practice10Sub