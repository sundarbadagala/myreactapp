import React, { Component } from 'react'

export class Render1Props extends Component {
    render() {
        return (
            <div>
                {this.props.render(false)}
            </div>
        )
    }
}

export default Render1Props
