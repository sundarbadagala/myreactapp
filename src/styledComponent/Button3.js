import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

`
const Button = styled.button`
    border:2px solid transparent;
    outline:none;
    padding:5px 10px;
    font-size:20px;
`
const ButtonPrimary = styled(Button)`
    background:blue;
    color:white;
    border:2px solid transparent;
    &:hover{
        background:transparent;
        color:black;
        border:2px solid blue;
    }
`
const ButtonSecondary = styled(Button)`
    background:hotpink;
    color:white;
    border:2px solid transparent;
    &:hover{
        background:transparent;
        color:black;
        border:2px solid hotpink;
    }
`
const ButtonDark= styled(Button)`
    background:black;
    color:white;
    border:2px solid transparent;
    &:hover{
        background:transparent;
        color:black;
        border:2px solid black;
    }
`
function Button3() {
    return (
        <Wrapper>
            <Button>
                Click Here
            </Button>        
            <ButtonPrimary>
                Primary
            </ButtonPrimary>
            <ButtonSecondary>
                Secondary
            </ButtonSecondary>
            <ButtonDark>
                Dark
            </ButtonDark>
        </Wrapper>
    )
}

export default Button3
