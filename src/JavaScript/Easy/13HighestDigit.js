import React from 'react'

function App() {
    const n = 276
    const result = Math.max(...n.toString())
    console.log(n, result)
    return (
        <div>
            Highest Digit from a number<br/>
            <code>
                Output: 379<br/>
                Input: 9 <br/><br/>
                Output: 276 <br/>
                Input: 7
            </code>
        </div>
    )
}

export default App
