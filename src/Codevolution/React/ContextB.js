import React, { Component } from 'react'
import ContextC from './ContextC'
import UserContext from './userContext'

export class ContextB extends Component {
    static contextType= UserContext
    render() {
        return (
            <div>
                Component B context {this.context}
                <ContextC/>
            </div>
        )
    }
}

export default ContextB
