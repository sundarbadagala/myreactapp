import React from 'react'

function App({nameHandler, numberHandler}) {
    return (
        <form>
            <input type='text' placeholder='enter name' onChange={nameHandler}/>
            <input type='text' placeholder='enter number' onChange={numberHandler}/>
        </form>
    )
}

export default App
