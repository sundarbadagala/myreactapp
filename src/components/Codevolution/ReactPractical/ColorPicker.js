import React, { useState } from 'react'
import {ChromePicker} from 'react-color'

function Colors() {
    const [color, setColor]= useState('#fff')
    return (
        <div>
            Color Picker
            <ChromePicker color={color} onChange={updateColor=>setColor(updateColor)}/>
        </div>
    )
}

export default Colors
