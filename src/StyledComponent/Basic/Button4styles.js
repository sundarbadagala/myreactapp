import styled from 'styled-components'

export const Wrapper = styled.div`

`
export const Button = styled.button`
    border:2px solid transparent;
    outline:none;
    padding:5px 10px;
    font-size:20px;
`
export const ButtonPrimary = styled(Button)`
    background:blue;
    color:white;
    border:2px solid transparent;
    &:hover{
        background:transparent;
        color:black;
        border:2px solid blue;
    }
`
export const ButtonSecondary = styled(Button)`
    background:hotpink;
    color:white;
    border:2px solid transparent;
    &:hover{
        background:transparent;
        color:black;
        border:2px solid hotpink;
    }
`
export const ButtonDark= styled(Button)`
    background:black;
    color:white;
    border:2px solid transparent;
    &:hover{
        background:transparent;
        color:black;
        border:2px solid black;
    }
`