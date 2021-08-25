import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.h1`
    width:500px;
    height:300px;
    background:black;
`
const Title = styled.p`
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
    border:1px solid black;
    font-size:50px;
    text-transform:uppercase;
`

function Basic() {
    return (
        <Wrapper>
            <Title>
                hello
            </Title>
        </Wrapper>
    )
}

export default Basic
