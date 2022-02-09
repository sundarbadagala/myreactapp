import React from 'react'

function App() {
    const redundant = str => () => str;
    console.log(redundant)
    return (
        <div>
            A Redundant Function
        </div>
    )
}

export default App
