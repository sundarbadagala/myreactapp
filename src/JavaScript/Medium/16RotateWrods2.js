import React from 'react'

function App() {
    const value = 'HI SIN SON'
    const result = value.match(/[HINOSZ]/g)
    const len = result.length
    console.log('the letters having same after rotate', result)
    console.log('the number of letters', len)
    return (
        <div>
            The letter should be same even though after it rotates 180deg ex: H, I, N, O, S, Z<br/>
            <code>
                Input: 'HELLO WORLD'<br/>
                Output: the letters having same after rotate' ['H', 'O', 'O'] and Length is 3<br/><br/>
                Input: 'HI SIN SON'<br/>
                Output: the letters having same after rotate' ['H', 'I', 'S', 'I', 'N', 'S', 'O', 'N'] and Length is 8<br/><br/>
            </code>
        </div>
    )
}

export default App
