import React, {useState} from 'react'
import MouseMove from './HookMouse'

function MouseContainer() {
    const [display, setDisplay]= useState(true)
    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
            {display && <MouseMove/>}
        </div>
    )
}

export default MouseContainer
