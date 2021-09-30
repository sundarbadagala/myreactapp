import React from 'react'
import styled from 'styled-components'

function App() {
    const Button = styled.button`
        border: none;
        outline: none;
        padding: 5px 10px;
        border-radius: 3px;
        background-color: ${props => props.primary ? 'blue' : (props.secondary? 'grey' : (props.warning ? 'orange' : (props.danger ? 'red' : 'green'))) };
        color: white;

        &:active{
            filter: brightness(70%);
        }
    `
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <Button>
                Click Here
            </Button>
            <Button primary>
                Primary
            </Button>
            <Button secondary>
                Secondary
            </Button>
            <Button warning>
                Warning
            </Button>
            <Button danger>
                Danger
            </Button>
        </div>
    )
}

export default App
