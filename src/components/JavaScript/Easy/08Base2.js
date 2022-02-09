import React from 'react'

function App() {
    const value = 1
    const Main=(value)=>{
        return value.toString(2)
    }
    console.log(Main(value))
    return (
        <div>
            Convert a Number to Binary values with Base -2 
        </div>
    )
}

export default App
