import React from 'react'

function List({key,children, className}) {
    return (
            <li 
                className={className} 
                key={key}
            >
                {children}
            </li>
    )
}

export default List
