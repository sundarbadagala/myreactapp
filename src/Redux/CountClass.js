import React, { Component } from 'react'
import {ButtonGroup, Button} from 'react-bootstrap'

class Count3 extends Component {
    constructor(props){
        super()
        this.state={
            count:0
        }
    }
    decrementValue=()=>{
        this.setState({
            count: this.state.count - 1
        })
    }
    incrementValue=()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div className='m-3'>
            Count App using Class component<br/>
            <ButtonGroup>
                <Button onClick={()=>this.decrementValue()}>-</Button>
                <Button variant='outline-primary' disabled>{this.state.count}</Button>
                <Button onClick={()=>this.incrementValue()}>+</Button>
            </ButtonGroup>
        </div>
        )
    }
}
export default Count3
