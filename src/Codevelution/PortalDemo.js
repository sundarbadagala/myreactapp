import React from 'react'
import reactDom from 'react-dom'

function PortalDemo() {
    return reactDom.createPortal(
        <div>
            Inspect the ELEMENT id root for better clarification<hr/>
            <h3>This is Portal Demo</h3>
        </div>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo
