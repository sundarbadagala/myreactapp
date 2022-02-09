import React from 'react'

function App() {
    const value = '3.1400'
    console.log(''+(+value))
    return (
        <div>
            Remove the Trailing Zeros and Leading Zeros from a number <br/>
            <code>
                Input : 20.000<br/>
                Output: 20<br/><br/>
                Input : 0023.12000<br/>
                Output : 23.12 <br/><br/>
                Input: 023<br/>
                Output: 23
            </code>
        </div>
    )
}

export default App
