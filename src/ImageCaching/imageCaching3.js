import React from 'react'
import a1 from './a1.jpeg'
import a2 from './a2.jpeg'
import a3 from './a3.jpeg'

function App() {
    return (
        <div>
            <img src={a1} alt='' style={{width:'100px', height:'100px'}}/>
            <img src={a2} alt='' style={{width:'100px', height:'100px'}}/>
            <img src={a3} alt='' style={{width:'100px', height:'100px'}}/>
        </div>
    )
}

export default App
