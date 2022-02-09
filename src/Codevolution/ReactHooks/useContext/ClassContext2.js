import React, { Component } from 'react'

const userContext = React.createContext()

export class ContextMain extends Component {
    render() {
        return (
            <div>
                <userContext.Provider value='RAM'>
                    <ContextA/>
                </userContext.Provider>
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
    render() {
        return (
            <div>
                <ContextC/>
            </div>
        )
    }
}

class ContextC extends React.Component{
    render() {
        return (
            <div>
                <userContext.Consumer>
                {
                    (user)=>{
                        return(
                            <div>User Name is : {user}</div>
                        )
                    }
                }
                </userContext.Consumer>
            </div>
        )
    }
}



export default ContextMain
