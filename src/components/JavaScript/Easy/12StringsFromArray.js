import React from 'react'

function App() {
    const arr=[1,'a',5,'d','f',9]
    const Main=(value)=>{
        return value.filter(item => typeof(item)==='number')
    }
    console.log(Main(arr))
    return (
        <div>
            Filter only from numbers from an array<br/>
            <code>
                Input : [1,'a',5,'d','f',9] <br/>
                Output: [1,5,9]
            </code>
        </div>
    )
}

export default App
