import React from 'react'

class Event extends React.Component{
    state={
        x: '',
        show: false
    }
    storeValue=(e)=>{
        this.setState({
            x: e.target.value
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
                <input type='text' placeholder='Enter name' onChange={this.storeValue} onFocus={this.hideResult} />
                <input type='button' value='Click Here' onClick={this.showResult}/>
                {this.state.show && <div>Hello {this.state.x}!, How are you?</div>}

            </div>
        )
    }
}
export default Event;