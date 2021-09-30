import React from 'react'

function App() {
    const value = 'heabcllohabi'
    const result = value.replace(/[abc]/g,'')
    console.log(result)
    return (
        <div>
            Remove a,b,c from giver sentence <br/>
            <code>
                Input : rama <br/>
                Output: rm <br/><br/>
                Input : heabcllohabci <br/>
                Output : hellohi<br/><br/>
                Input : heabcllohabi<br/>
                Output : hellohi 
            </code>
        </div>
    )
}

export default App
