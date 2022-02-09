import React from 'react'

function App() {
    const arr=[2,3,4,5,6,7,8]
    const result = arr.every((item, index)=> item%2 === index%2 )
    console.log(result)
    return (
        <div>
            Special Array <br/>
            All the even index elements should be even and all the odd index elements should be odd<br/>
            <code>
                Input : [1,2,3,4,5]<br/>
                Output: false <br/><br/>
                Input : [0,1,2,3,4,5]<br/>
                Output: true <br/><br/>
                Input : [4,3,8,5,4]<br/>
                Output: true <br/><br/>
                Input : [5,3,7,5,6,9]<br/>
                Output: false <br/><br/>
            </code>
        </div>
    )
}

export default App
