import React from 'react'

function App() {
    const value = 'abcdefab'
    const result = value.replace(/abc/g, '')
    console.log(result)
    return (
        <div>
             Remove (abc) from giver sentence <br/>
            <code>
                Input : abcdef <br/>
                Output : def<br/><br/>
                Input : abcdefab<br/>
                Output : defab<br/><br/>
                Input : rama <br/>
                Output: rama <br/><br/>
                Input : heabcllohabci <br/>
                Output : hellohi<br/><br/>
                Input : heabcllohabi<br/>
                Output : hellohabi 
            </code>
        </div>
    )
}

export default App
