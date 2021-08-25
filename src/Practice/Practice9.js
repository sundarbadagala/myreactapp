import React, { Component } from 'react'

export class Practice9 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             firstName:'Sundar',
             secondName:'Rao'
        }
    }
    render() {
        const {firstName}= this.state
        const {secondName}= this.state
        return (
            <div>
                {`${firstName} ${secondName}`}
            </div>
        )
    }
}

export default Practice9
