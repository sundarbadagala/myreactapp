import React, { Component } from 'react'

const UserContext= React.createContext()

export class ContextMain extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'RAM',
             age:23,
             color:'blue'
        }
    }
    
    render() {
        return (
            <div>
               <UserContext.Provider value={this.state}>
                    <ContextA/> 
               </UserContext.Provider>
            </div>
        )
    }
}

class ContextA extends React.Component{
    render() {
        return (
            <div>
                <ContextB/>
            </div>
        )
    }
}

class ContextB extends React.Component{
    static contextType= UserContext
    render() {
        return (
            <div>
                <ContextC/>
                Fav Colour: {this.context.color}
            </div>
        )
    }
}

class ContextC extends React.Component{
    static contextType= UserContext
    render() {
        return (
            <div>
                Component C <br/>
                Name: {this.context.name}<br/>
                Age: {this.context.age}
            </div>
        )
    }
}

export default ContextMain
