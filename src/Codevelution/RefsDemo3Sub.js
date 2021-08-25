import React, { Component } from 'react'

export class RefsDemo3Sub extends Component {
    constructor(props) {
        super(props)
        this.inputRef= React.createRef()
    }
    focusInput=()=>{
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                Ref with class component<hr/>
                <input type='text' ref={this.inputRef}/>
            </div>
        )
    }
}

export default RefsDemo3Sub
