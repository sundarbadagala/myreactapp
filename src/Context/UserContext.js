import React from 'react'
import {Data} from './Data'

const UserContext = React.createContext()

export const UserProvider = (props) =>{
    return(
        <UserContext.Provider value={Data}>
            {props.children}
        </UserContext.Provider>
    )
}

export const UserConsumer= UserContext.Consumer