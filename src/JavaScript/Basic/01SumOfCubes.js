import React from 'react'

function App() {
    const Main=(n)=>{
        let sum=0
        for(let i=0; i<=n ; i++){
            sum += Math.pow(i, 3)
        }
        return sum
    }
    console.log(Main(4))
    return (
        <>
        <h1>
            Sum of Cubes <br/>
        </h1>
        <code>
            input: 4 <br/>
            Output : 100 --- 1*3 + 2*3 + 3*3 + 4*3
        </code>
        </>
    )
}

export default App
