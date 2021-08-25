import React, { Component } from 'react'

export class RefsDemo2 extends Component {
    constructor(props) {
        super(props)
        this.cbRef=null
        this.setCbRef=(Element)=>{
            this.cbRef= Element
        }
    }
    componentDidMount=()=>{
        this.cbRef.focus()
    }
    render() {
        return (
            <div>
                <input type='text' ref={this.setCbRef}/>
            </div>
        )
    }
}

export default RefsDemo2
