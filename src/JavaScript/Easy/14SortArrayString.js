import React from 'react'

function App() {
    const arr = ['Apple', 'Ape','Approach', 'Apex']
    const a = arr.sort()
    console.log(a)
    return (
        <div>
            Sort Array cotains String elements<br/>
            <code>
                Output : ['Apple', 'Ape','Approach', 'Apex'] <br/>
                Input:  ['Ape', 'Apex', 'Apple', 'Approach']
            </code>
        </div>
    )
}

export default App
