import React from 'react'
import './CssStyling.css'

function CssStyling() {
    return (
        <div>
            apply more than one className's(effects) to one attribute<br/>
            <h3 className={`color-change font-change back-change`}>HELLO WORLD</h3><hr/>
            Apply single className effect to more than two attributes<br/>
            <h3 className='card'>HELLO WROLD</h3>
            <h4 className='subcard'>HI WORLD</h4>

        </div>
    )
}

export default CssStyling
