import React from 'react'

function App() {
    const arr=[8,2,3,10,12,23]
    // ---------------First Method--------------------
    const Main=(arr)=>{
        const minimum= Math.min.apply(null, arr)
        const maximum= Math.max.apply(null, arr)
        return [minimum, maximum]
    }
    // ---------------Second Method--------------------
    const Main2=(arr)=>{
        const minimum= Math.min(...arr)
        const maximum= Math.max(...arr)
        return [minimum, maximum]
    }
    console.log(Main(arr))
    console.log(Main2(arr))
    return (
        <div>
            Find Min and Max vaues from an array<br/>
            <code>
                Input : [8,2,3,10,12,23] <br/>
                Output : [2, 23] [min, max]
            </code>
        </div>
    )
}

export default App
