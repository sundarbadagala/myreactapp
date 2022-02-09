import React from 'react'

class Events extends React.Component{
    state={
        name: '',
        show: false
    }
    storeValue=e=>{
        this.setState({
            name: e.target.value
        })
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

    render() {
        return (
            <div>
                <input type='text' onChange={this.storeValue} onFocus={this.hideResult}/>
                <input type='button' value='Enter' onClick={this.showResult}/><br/>
                {this.state.show && <div>Hello {this.state.name}</div>}
            </div>
        )
    }
}
export default Events;