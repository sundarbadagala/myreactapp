import React from 'react'
import {Link} from 'react-router-dom'

function RouterSub() {
    const styles={
        color:'red',
        margin:'10px'
    }
    return (
        <div>
            <Link to='/' style={styles}>Home</Link>
            <Link to='/arrow' style={styles}>Arrow</Link>
            <Link to='/hide' style={styles}>Hide</Link>
            <Link to='/review' style={styles}>review</Link>
        </div>
    )
}

export default RouterSub
