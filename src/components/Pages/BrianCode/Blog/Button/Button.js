import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const STYLES=['btn--primary','btn--outline', 'btn--lite', 'btn--dark']
const SIZES= ['btn--medium','btn--large']

export const Button=({children, type, handleClick, buttonStyle, buttonSize, path, btnActive})=>{
    const checkButtonStyle=STYLES.includes(buttonStyle)? buttonStyle: STYLES[0]
    const checkButtonSize=SIZES.includes(buttonSize)? buttonSize: SIZES[0]
    return(
       <Link to={path}>
            <button onClick={handleClick} className={`btn ${checkButtonStyle} ${checkButtonSize} ${btnActive ? 'active':null}`} type={type}>
                {children}
            </button>
       </Link>
    )
}