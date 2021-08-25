import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state={
            name: '',
            phone:'',
            branch:'',
            show: false
        }
        
    }
    storeValue= (event)=> {
        this.setState({
            phone: (event.target.value),
            branch: (event.target.value),
            name: (event.target.value)

        })
    }
    showResult=()=>{
        this.setState({
            show: true
        })
    }
    render() {
        return (
            <div>
                <input type='text' onChange={this.storeValue} placeholder='Enter name'/><br/>
                <input type='number' onChange={this.storeValue} placeholder='Enter phone'/><br/>
                <input type='text' onChange={this.storeValue} placeholder='Enter Branch'/><br/>
                <button onClick={this.showResult}>Enter</button>
                {this.state.show && <div>Name: {this.state.name} <br/>Phone Number:{this.state.phone}<br/>Branch: {this.state.branch}</div>}<br/>
            </div>
        )
    }
}
export default App;