import React from 'react'
import {auth} from './firebase'

function Home() {
    return (
        <h1>
            Home page
            <button onClick={()=>auth.signOut()}>Sign Out</button>
        </h1>
    )
}

export default Home
