import React, { Component } from 'react'

export class DestructuringProps3 extends Component {
    render() {
        const {name, age}= this.props;
        return (
            <div>
                Hi {name}, Age is {age}
            </div>
        )
    }
}

export default DestructuringProps3
