import React from 'react'
import IframeResizer from 'iframe-resizer-react'
function App() {
    return (
        <div>
            <IframeResizer
    heightCalculationMethod="bodyScroll"

        style={{width:'100vh', style:'100%'}}
    src="https://cnaps.s3.ap-south-1.amazonaws.com/privacy-policy/CNAPS_PRIVACY_POLICY.html"
/>
        </div>
    )
}

export default App
