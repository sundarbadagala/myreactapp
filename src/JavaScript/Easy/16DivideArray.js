import React from 'react'

function App() {
    const arr = [1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19]
    while(arr.length){
        console.log(arr.splice(0, 5))
    }
    return (
        <div>
            Divide Single Array into different arrays containes max 5 elements<br/>
            <code>
                Output : [1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19] <br/>
                Input : [1, 2, 3, 4, 5] [6, 7, 8, 9, 11] [12, 13, 14, 15, 16] [17, 18, 19]
            </code>
        </div>
    )
}

export default App
