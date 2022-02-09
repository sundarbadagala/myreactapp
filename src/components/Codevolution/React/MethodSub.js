import React, { Component } from 'react'

export class MethodSub extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.wishMe}>Click Here</button>
            </div>
        )
    }
}

export default MethodSub
