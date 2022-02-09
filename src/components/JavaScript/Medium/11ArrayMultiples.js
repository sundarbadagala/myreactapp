import React from 'react'

function App() {
    const value=12
    const mult=10
    const arr=[]
    for(let i=1; i<=mult; i++){
        arr.push(value*i)
    }
    console.log(arr)
    return (
        <div>
           Array of multiples <br/>
           <code>
               Input : 12 and 3<br/>
               Output :  [12, 24, 36]<br/><br/>
               Input : 3 and 6 <br/>
               Output: [3,6,9,12,15,18]
           </code>
        </div>
    )
}

export default App
