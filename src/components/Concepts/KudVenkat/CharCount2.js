import React, { Component } from 'react'

export class CharCount2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg:'',
             count:0
        }
    }
    storeValue=(content)=>{
        this.setState({
            msg: `No of chars Entered ${content.length}`
        })
    }
    
    render() {
        return (
            <div>
                <textarea onChange={e=>this.storeValue(e.target.value)} placeholder='Enter Some Content Here'></textarea><br/>
                {this.state.msg}
            </div>
        )
    }
}

export default CharCount2
