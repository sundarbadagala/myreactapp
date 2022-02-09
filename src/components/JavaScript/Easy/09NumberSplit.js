import React from 'react'

function App() {
    const value=9
    // --------------------First Method-------------------
    const Main=(value)=>{
        const result = Math.floor(value/2) 
        return value%2 === 0 ? [result, result] : [result , result+1] 
    }
    // --------------------Second Method-------------------
    const Main2=(value)=>{
        return [Math.floor(value/2), Math.ceil(value/2)]
    }
    console.log(Main(value))
    console.log(Main2(value))
    return (
        <div>
            Number Split<br/>
            <code>
            output: 2<br/>
            input: [1,1]<br/><br/>
            output: 3<br/>
            input: [1,2]<br/><br/>
            output: 4<br/>
            input: [2,2]<br/><br/>
            output: 5<br/>
            input: [2,3]<br/><br/>
            </code>
        </div>
    )
}

export default App
