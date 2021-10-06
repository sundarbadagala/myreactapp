import React from 'react'

function App() {
    const value = 97
    let isPrime = true
    for(let i=2; i<value; i++){
        if(value%i===0){
            isPrime = false
            break
        }
    }
    console.log(`${value} is prime number? ${isPrime}`)
    return (
        <div>
            hello
        </div>
    )
}

export default App
