import React from 'react'

function App() {
    const value ='HI SIN SON'
    const result = new Set(value.match(/\b[HINOSZMW]+\b/g)).size
    console.log(result)
    return (
        <div>
            The word should be same even though after it rotates 180deg ex: H, I, N, O, S, Z, M, W<br/>
            <code>
                Input: 'IS IT OK'<br/>
                Output: 1 (The number of words sould be same after their rotate)<br/><br/>
                Input: 'OS IS GOOD'<br/>
                Output: 2 (The number of words sould be same after their rotate)<br/><br/>
                Input: 'HELLO'<br/>
                Output: 0 (The number of words sould be same after their rotate)<br/><br/>
                Input: 'HI SIN SON'<br/>
                Output: 3 (The number of words sould be same after their rotate)<br/><br/>
            </code>
        </div>
    )
}

export default App
