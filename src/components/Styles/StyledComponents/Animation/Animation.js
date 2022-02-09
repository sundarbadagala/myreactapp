import React from 'react'
import styled, {keyframes} from 'styled-components'

function App() {
    const rotate= keyframes`
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    `
    const Rotate= styled.img`
    animation: ${rotate} 2s linear infinite;
    width: 100px;
    height: 100px;
    
    `

    return (
        <div>
            <Rotate src='https://purepng.com/public/uploads/large/purepng.com-car-wheelcar-wheelcarwheeltire-1701527840615iovkz.png' alt/>
        </div>
    )
}

export default App
