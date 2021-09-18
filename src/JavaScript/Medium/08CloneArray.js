import React from 'react'

function App() {
    const arr=[1,2,3]
    const result = [...arr, arr]
    console.log(result)
    return (
        <div>
            Clone Array<br/>
            Copy an into same array<br/>
            <code>
                Input : [1,2,3]<br/>
                Ouutput: [1,2,3,[1,2,3]]<br/><br/>
                Input : ['a','b','c']<br/>
                Ouutput: ['a','b','c',['a','b','c']]<br/><br/>
                Input : [1,2,3,4,5]<br/>
                Ouutput: [1,2,3,4,5[1,2,3,4,5]]<br/><br/>
            </code>
        </div>
    )
}

export default App
