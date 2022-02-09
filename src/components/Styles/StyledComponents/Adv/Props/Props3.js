import React from 'react'
import styled from 'styled-components'

function App() {
    const Button = styled.button`
        border: none;
        padding: 5px 10px;
        background-color: ${({bg})=> bg==='primary'? 'blue': (bg==='secondary' ? 'red' : 'green')};
    `

    return (
        <div>
            <Button>
                Click Here
            </Button>  
            <Button bg='primary'>
                Click Here
            </Button>
            <Button bg='secondary'>
                Click Here
            </Button>      
        </div>
    )
}

export default App
