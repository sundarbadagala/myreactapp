import React from 'react'
import './Error.css'
import logo from './frown-regular.svg'


function Error({error}) {
    return (
        <div className='error'>
            <img src={logo} alt=''/>
            <h3 className='error-message'>{error}</h3>
        </div>
    )
}

export default Error
