import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    componentDidMount=()=>{
        this.inputRef.current.focus()
    }
    onClickHandler=()=>{
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
            The below INPUT will automatically focused on page load<hr/>
                <input type='text' ref={this.inputRef}/>
                <button onClick={this.onClickHandler}>Result</button>
            </div>
        )
    }
}

export default RefsDemo
