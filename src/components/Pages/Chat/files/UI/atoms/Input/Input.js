import React from 'react'

function Input2({type, value, placeholder, onChange, className}) {
    return (
        <input 
            type={type} 
            value={value} 
            placeholder={placeholder} 
            onChange={onChange} 
            className={className}
        />
    )
}

export default Input2
