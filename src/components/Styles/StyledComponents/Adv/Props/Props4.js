import React from 'react'
import styled, {css} from 'styled-components'

const Button = styled.button`
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    background-color: blue;
    color: white;
    ${({primary})=> primary && css`
        background-color: green;
        color: pink;
    `}
    ${({secondary})=> secondary && css`
        background-color: red;
        color: yellow;
    `}
`


function Index() {
    return (
        <div>
            <Button>
                Click Here
            </Button>
            <Button primary>
                Click Here
            </Button>
            <Button secondary>
                Click Here
            </Button>
        </div>
    )
}

export default Index
