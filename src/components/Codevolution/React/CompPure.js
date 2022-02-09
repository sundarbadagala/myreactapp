import React, { PureComponent } from 'react'

export class CompPure extends PureComponent {
    render() {
        console.log('Pure Component')
        return (
            <div>
                Pure Component
            </div>
        )
    }
}

export default CompPure
