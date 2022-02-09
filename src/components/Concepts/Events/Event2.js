import React from 'react'

export default class Event extends React.Component{
    state={
        x: 0,
        show: false
    }
    storeValue=(event)=>{
        this.setState({
            x: event.target.value
        })
    }
    evenOrOdd=()=>{
        if(this.state.x%2 === 0) return 'EVEN';
        return 'ODD';
    }
    showResult=()=>{
        this.setState({
            show: true
        })
    }
    hideResult=()=>{
        this.setState({
            show: false
        })
    }
    render(){
        return(
            <div>
                <input type='number' placeholder='enter number' onChange={this.storeValue} onFocus={this.hideResult}/>
                <input type='button' value='enter' onClick={this.showResult}/>
                {this.state.show && this.evenOrOdd()}
                
            </div>
        );
    }
} 