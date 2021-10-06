import React from 'react'
import a1 from './a1.jpeg'
import a2 from './a2.jpeg'
import a3 from './a3.jpeg'

function App() {
    return (
        <div>
            <img src='https://media.istockphoto.com/photos/red-apple-picture-id184276818?s=612x612' alt='' style={{width:'100px', height:'100px'}}/>
            <img src='https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt='' style={{width:'100px', height:'100px'}}/>
            <img src={a3} alt='' style={{width:'100px', height:'100px'}}/>
        </div>
    )
}

export default App
