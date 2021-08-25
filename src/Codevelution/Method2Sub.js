import React, { Component } from 'react'

export class MethodSub extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.props.wishMe('child')}>Click Here</button>
            </div>
        )
    }
}

export default MethodSub
