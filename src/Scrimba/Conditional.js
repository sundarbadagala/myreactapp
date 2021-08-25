import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state={
            isLogged: false
        }
        this.changeState= this.changeState.bind(this)
    }
    changeState(){
        this.setState(prevState=>{
            return{
                isLogged : !prevState.isLogged
            }
        })
    }
    render() {
        const buttonValue= this.state.isLogged? 'Log Out':'Log In'
        const currentStatus= this.state.isLogged?'Logged In':'Logged Out'
        return (
            <div>
                <p>{currentStatus}</p>
                <button onClick={this.changeState}>{buttonValue}</button>
                <p>final version*</p>
            </div>
        )
    }
}
export default App;