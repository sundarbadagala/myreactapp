import React from 'react'
import './Button.css'

const STYLES= ['btn--lite','btn--dark', 'btn--outlineLite', 'btn--outlineDark']
const SIZES= ['btn--medium', 'btn--large']

function Button({children, handleClick, buttonStyle, buttonSize, btnActive}) {
    const checkButtonStyle= STYLES.includes(buttonStyle)? buttonStyle : STYLES[0]
    const checkButtonSize= SIZES.includes(buttonSize)? buttonSize : SIZES[0]
    return (
        <button onClick={handleClick} className={`btn ${checkButtonStyle} ${checkButtonSize} ${btnActive ? 'active':null}`}>{children}</button>
    )
}

export default Button
