import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state={
            firstValue:'',
            secondValue:''
        }
    }
    storeValue=(e)=>{
        const {name, value}= e.target
        this.setState({
            [name]: parseInt(value)
        })
    }
    render(){
        const {firstValue, secondValue} = this.state 
        return(
            <div>
                Enter first Value 
                <input 
                    type='text' 
                    onChange={this.storeValue}
                    name='firstValue'
                    value={this.state.firstValue}    
                /><br/>
                Enter second value 
                <input 
                    type='text'
                    onChange={this.storeValue}
                    name='secondValue'
                    value={this.state.secondValue}    
                /><br/>
                First Value = {firstValue}<br/>
                Second Value  = {secondValue}<br/>
                Sum : {firstValue + secondValue}<br/>
                Sub : {firstValue - secondValue}<br/>
                Div : {firstValue / secondValue}<br/>
                Mul : {firstValue * secondValue}<br/>
            </div>
        )
    }
}

export default App;