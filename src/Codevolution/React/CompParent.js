import React, { Component } from 'react'
import Regual from './CompReg'
import Pure from './CompPure'
import Memo from './CompMemo'

export class CompParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'RAM'
        }
    }
    componentDidMount=()=>{
        setInterval(()=>{
            this.setState({
                name:'RAM'
            })
        },2000)
    }
    

    render() {
        console.log('***********Parent Component***********')
        return (
            <div>
                Parent Component
                <Memo/>
                {/*                
                <Regual />
                <Pure/>
                */}
            </div>
        )
    }
}

export default CompParent
