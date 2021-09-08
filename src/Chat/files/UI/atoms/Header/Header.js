import React from 'react'

function Heading({children, className}) {
    return (
        <h2 className={className}>
            {children}    
        </h2>            
    )
}

export default Heading
