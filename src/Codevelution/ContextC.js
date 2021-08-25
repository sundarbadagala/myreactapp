import React, { Component } from 'react'
import {UserConsumer} from './userContext'


export class ContextC extends Component {
    render() {
        return (
            <UserConsumer>
            {
                (username)=>{
                    return<h3>HELLO {username}</h3>
                }
            }
            </UserConsumer>
        )
    }
}

export default ContextC
