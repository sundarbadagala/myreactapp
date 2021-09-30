import styled from 'styled-components'

export const Wrapper= styled.div`

`

export const Button= styled.button`
    border: none;
    outline: none;
    background-color: ${({theme})=> theme.primary};
    color:${({theme})=> theme.lite};
    padding: 5px 10px;
    border-radius: 3px;
    
`