import React from 'react'

const STYLES = ['btn--primary', 'btn--secondary']
const SIZES = ['btn--medium', 'btn--small', 'btn--large']

function Button({children, buttonStyle, buttonSize}) {
    const checkButtonStyle=STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    return (
        <div>
            {children}
        </div>
    )
}

export default Button
