//onChange, onBlur, onFocus
//observe the difference between function assign and function call
import React from 'react'

export default class Events extends React.Component{
    state={
        x : undefined,
        show: false
    }
    storeValue=(event)=>{
        this.setState({
            x : event.target.value
        })
    }
    evenOrOdd=()=>{
        if(this.state.x%2 === 0) return 'EVEN';
        else if (this.state.x === undefined) return '';
        else return 'ODD';
    }
    showResult=()=>{
        this.setState({
            show : true
        })
    }
    hideResult=()=>{
        this.setState({
            show: false
        })
    }
    render() {
        return (
            <div>
                <input type='number' placeholder='Enter Number' onChange={this.storeValue} onBlur={this.showResult} onFocus={this.hideResult}/>
                {this.state.show && this.evenOrOdd()} 
            </div>
        )
    }
}