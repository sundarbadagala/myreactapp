import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export class CharCount2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg:'20',
             count:20
        }
    }
    storeValue=(content)=>{
        this.setState({
            msg: `${20-content.length}`
        })
    }
    
    render() {
        return (
            <div>
                <textarea onChange={e=>this.storeValue(e.target.value)} placeholder='Enter Some Content Here'></textarea><br/>
                No of Char limit: {this.state.msg}

                <br/><button className='btn btn-primary' style={{borderRadius:'20%', margin:10}}>Submit</button>
            </div>
        )
    }
}

export default CharCount2
