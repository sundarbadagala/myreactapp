import React from 'react'

function App() {
    const start = 7
    const end= 9
    const divd= 2
    const Main=(start, end, divd)=>{
        const arr = []
        for(let i=start; i<=end; i++){
            if(i%divd === 0){
                arr.push(i)
            }
          }
        return arr
    }
    console.log(Main(start, end, divd))
    return (
        <div>
            Array Operation: <br/>
            Take 3 values x is starting value, y is ending value, n divisible number <br/>
            have to get the output from x to y which are divisible by n<br/>
            <code>
                input : 1, 10, 3<br/>
                output: [3, 6, 9]<br/><br/>
                input: 7, 9, 2<br/>
                output: [8]<br/><br/>
                input : 15, 20, 7<br/>
                output: []
            </code>
        </div>
    )
}

export default App
