import React from 'react'
import value from './1.jpg'

function App() {
    var im = new Image()
    im.src= value
    console.log(im.src)
    return (
        <div>
            <img src={im.src} alt=''/>
        </div>
    )
}

export default App


