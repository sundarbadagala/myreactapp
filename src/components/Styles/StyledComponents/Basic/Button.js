import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin:10px;
`

const Hello = styled.button`
    background-color:red;
    outline:none;
    border:3px solid transparent;
    padding:5px 10px;
    font-size:20px;
    cursor: pointer;
    color:white;
    border-radius: 5px;

    &:hover{
        background-color:white;
        border:3px solid red;
        color:red;
        transition: all 0.5s ease-out;
    }
`

function Button() {
    return (
        <Wrapper>
            <Hello>
                Click Here
            </Hello>
        </Wrapper>
    )
}

export default Button
