import React, { Component } from 'react'


const UserContext = React.createContext()
const ChannelContext = React.createContext()


export class ContextMain extends Component {
    render() {
        return (
            <div>
                <UserContext.Provider value='RAM'>
                    <ChannelContext.Provider value='SITA'>
                        <ContextA/>
                    </ChannelContext.Provider>
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
                <UserContext.Consumer>
                   {
                       (user)=>{
                          return(
                            <ChannelContext.Consumer>
                                {
                                    (channel)=>{
                                        return(
                                            <div>
                                                User Name: {user}<br/>
                                                Channel Name: {channel}
                                            </div>
                                        )
                                    }
                                }
                            </ChannelContext.Consumer>
                          )
                       }
                   }
                </UserContext.Consumer>
            </div>
        )
    }
}

export default ContextMain
