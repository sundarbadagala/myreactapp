import React from 'react'

//https://react-icons.github.io/react-icons

import {FaReact} from 'react-icons/fa'   //font awsome icons
import {BsFillInfoSquareFill} from 'react-icons/bs'    //bootstrap icons
import {FiWifiOff} from 'react-icons/fi'
import {IconContext} from 'react-icons'

function Icons() {
    return (
        <div>
            <FaReact color='blue' size='5rem'/>
            <BsFillInfoSquareFill color='blue' size='5rem'/>
            <FiWifiOff color='blue' size='5rem'/>

            <br/>

            <IconContext.Provider value={{color:'red', size:'5rem'}}>
                <FaReact/>
                <BsFillInfoSquareFill/>
                <FiWifiOff/>
            </IconContext.Provider>
        </div>
    )
}

export default Icons
