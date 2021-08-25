import React from 'react'
import './Button.css'

const STYLES=['btn--primary', 'btn--outlineLite', 'btn--outlineDark']
const SIZES=['btn--normal', 'btn--large']

function Button({children, buttonStyle, buttonSize}) {
    const checkButtonStyle= STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize= SIZES.includes(buttonSize) ? buttonSize : STYLES[0]
    return (
        <div className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
            {children}
        </div>
    )
}

export default Button
