import React from 'react'
//import {User} from './userStyled'

function Usering({children, key, onClick, className}) {
    return (
        <div 
            key={key} 
            className={className}  
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default Usering
