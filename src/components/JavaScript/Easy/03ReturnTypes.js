import React from 'react'

function App() {
    const a = [1,'a',2, null, []]
    const b = a.map(item => typeof(item))
    console.log(b)
    return (
        <div>
            Return Types<br/>
            <code>
                input : [1,'2', 4]<br/>
                output : [number, string, number]
            </code>
        </div>
    )
}

export default App
