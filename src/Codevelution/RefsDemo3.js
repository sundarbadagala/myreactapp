import React, { Component } from 'react'
import Input from './RefsDemo3Sub'

export class RefsDemo3 extends Component {
    constructor(props) {
        super(props)
        this.componentRef= React.createRef()
    }
    onClickHandler=()=>{
        this.componentRef.current.focusInput()
    }
    render() {
        return (
            <div>
                <Input ref={this.componentRef}/>
                <button onClick={this.onClickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default RefsDemo3
