import React from 'react'

function App() {
    const value = 'apple'
    console.log(value.length%2 === 0)
    return (
        <div>
            Find the string is Odd or Even by the length of string<br/>
            <code>
                Inpute : 'app' <br/>
                Output: odd  length of app is 3 <br/><br/>
                Inpute : 'apps' <br/>
                Output: even  length of app is 4 <br/><br/>
            </code>
        </div>
    )
}

export default App
