import React from 'react'

class Calulator extends React.Component{
    constructor(props){
        super(props)
        this.state={
            firstValue:'',
            secondValue:'',
            show:false,
            finalValue:'',
            zero:'',
            one:'',
            two:'',
            three:'',
            four:'',
            five:'',
            six:'',
            seven:'',
            eight:'',
            nine:'',
        }
    }
    storeValue=(e)=>{
        const {name, value}= e.target
        this.setState({
            [name]: parseInt(value)
        })
    }
   finalResultAdd=()=>{
        this.setState({
            show: true,
            finalValue: this.state.firstValue + this.state.secondValue
        })
   }
   finalResultSub=()=>{
    this.setState({
        show: true,
        finalValue: this.state.firstValue - this.state.secondValue
    })
}
finalResultDiv=()=>{
    this.setState({
        show: true,
        finalValue: this.state.firstValue / this.state.secondValue
    })
}
finalResultMul=()=>{
    this.setState({
        show: true,
        finalValue: this.state.firstValue * this.state.secondValue
    })
}
    render(){
        const {firstValue, secondValue}= this.state
        return(
            <React.Fragment>
                <input 
                    type='text' 
                    name='firstValue' 
                    value={this.state.firstValue} 
                    onChange={this.storeValue}
                    placeholder='First Value'
                />
                <input 
                    type='text' 
                    name='secondValue' 
                    value={this.state.secondValue} 
                    onChange={this.storeValue}
                    placeholder='Second Value'
                /><br/>
                <button onClick={this.finalResultAdd}>Add</button>
                <button onClick={this.finalResultSub}>Sub</button>
                <button onClick={this.finalResultDiv}>Div</button>
                <button onClick={this.finalResultMul}>Mul</button>
                <br/>
                <button name='' value={this.state.zero} onClick={this.storeValue}>0</button>
                <button name='' value={this.state.one} onClick={this.storeValue}>1</button>
                <button name='' value={this.state.two} onClick={this.storeValue}>2</button>
                <button name='' value={this.state.three} onClick={this.storeValue}>3</button>
                <button name='' value={this.state.four} onClick={this.storeValue}>4</button>
                <button name='' value={this.state.five} onClick={this.storeValue}>5</button>
                <button name='' value={this.state.six} onClick={this.storeValue}>6</button>
                <button name='' value={this.state.seven} onClick={this.storeValue}>7</button>
                <button name='' value={this.state.eight} onClick={this.storeValue}>8</button>
                <button name='' value={this.state.nine} onClick={this.storeValue}>9</button>
                {this.state.finalValue}
                {this.state.one}
            </React.Fragment>
        )
    }
}

export default Calulator;