import React, { Component } from 'react'
import Ren from './Render1Props'

export class Render1 extends Component {
    render() {
        return (
            <div>
                Render props<hr/>
                <Ren render={(isLoggedIn)=>isLoggedIn? 'Thanks for log in':'Please Log in'} />
            </div>
        )
    }
}

export default Render1
