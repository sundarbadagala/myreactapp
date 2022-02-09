import React from 'react'

function App() {
    const arr = ['Apple', 'Ape','Approach', 'Apex']
    const result = arr.sort((a,b)=> a.length - b.length)
    console.log(result)
    return (
        <div>
            Sort Array based on its String elements length<br/>
            <code>
                Output : ['Apple', 'Ape','Approach', 'Apex'] <br/>
                Input:  ['Ape', 'Apex', 'Apple', 'Approach']
            </code>
        </div>
    )
}

export default App
