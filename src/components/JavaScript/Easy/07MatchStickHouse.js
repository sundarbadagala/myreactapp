import React from 'react'

function App() {
    const step=87
    // --------------------First Method-----------------
    const Match=(step)=>{
        const top = step * 3
        const bottom = step
        const middle = step + 1
        return step !== 0 ? top+bottom+middle : 0
    }
    // --------------------Second Method-----------------
    const Match2=(step)=>{
        return step === 0 ? 0 : 5* step +1
    }
    console.log(Match(step))
    console.log(Match2(step))
    return (
        <div>
            <img src='https://edabit-challenges.s3.amazonaws.com/matchstick_houses.png' alt=''/><br/>
            Match Stick Housexx<br/>
            Find the number of match sticks needed by entering number of match houses<br/>
            <code>
            input: 1<br/>
            output: 6<br/><br/>
            input: 4<br/>
            output: 21<br/><br/>
            input: 8<br/>
            output: 436
            </code>
        </div>
    )
}

export default App
