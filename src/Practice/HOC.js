import React, { Component } from 'react'
import Click from './HocClick'
import Hover from './HocHover'

export class HOC extends Component {
    render() {
        return (
            <div>
                <Click name='ALOK'/>
                <Hover/>
            </div>
        )
    }
}

export default HOC
