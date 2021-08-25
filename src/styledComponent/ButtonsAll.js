import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    border:2px solid ${props => props.dark ? 'black': 'transparent'};
    padding:5px 10px;
    font-size:20px;
    margin:2px;
    border-radius:3px;
    color:black;
`
const ButtonPrimary = styled(Button)`
    background-color:blue;
    color:white;
    &:hover{
        background-color:transparent;
        color:blue;
        border:2px solid blue;
    }
`
const ButtonSecondary = styled(Button)`
    background-color:hotpink;
    color:white;
    &:hover{
        background-color:transparent;
        color:hotpink;
        border:2px solid hotpink;
    }
`
const ButtonReverse =  props => <Button {...props} children={props.children.split('').reverse()}/>

const ButtonA = styled(Button)`
    color: ${props => props.color || 'red'};
    background: ${props => props.bgColor || 'pink'};
    border: 2px solid ${props => props.border || 'hotpink'}
`

const Input = styled.input`
    padding:4px;
    font-size:20px;
    background-color:pink;
    &:hover{
        background-color:lightpink;
    }
    &:focus{
        background-color:hotpink;
    }
`
const InputA = styled.input`
    padding:4px;
    font-size:20px;
    background-color:${props => props.bgColor || 'lightgrey'};
    color: ${props => props.color || 'blue' }
`
function Practice() {
    return (
        <div>
            <Button>
                Click Here
            </Button>
            <ButtonPrimary>
                Click Here
            </ButtonPrimary>
            <ButtonSecondary>
                Click Here
            </ButtonSecondary>
            <Button dark>
                Click Here
            </Button>
            <hr/>
            <Button as ='a' href='/' dark>
                Click Here
            </Button>
            <Button as={ButtonReverse}>
                Click Here
            </Button>
            <hr/>
            <ButtonA>
                Click Here
            </ButtonA>
            <ButtonA color='blue' bgColor='yellow' border='green'>
                Click Here
            </ButtonA>
            <hr/>
            <Input type='text' defaultValue='Enter Your Name'/>
            <InputA type='text' defaultValue='Enter Your Name'/>
            <InputA type='text' defaultValue='Enter Your Name' color='red' bgColor='yellow'/>
            <hr/>
        </div>
    )
}

export default Practice
