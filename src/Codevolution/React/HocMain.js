import React from 'react'
import ClickCounter from './HocClickCounter'
import HoverCounter from './HocHoverCounter'

function HOC() {
    return (
        <div>
            HIGHER ORDER FUNCTINO <hr/>
            <ClickCounter name='Ajay'/>
            <HoverCounter/>
        </div>
    )
}

export default HOC
