import React from 'react'
import styled, {keyframes} from 'styled-components'

function Animation2() {
    const Wrapper = styled.div`
        border: 1px solid red;
        display: flex;
        justify-content: space-evenly;

    `
    const anim = keyframes`
        0%{
            transform: translateX(0%);
        }
        100%{
            transform: translateX(1000%);
        }
    `
    const Anim = styled.div`
        border: 1px solid black;
        background-color: teal;
        width: 50px;
        height: 50px;
        animation: ${anim} 1s linear infinite;
    `
    return (
        <Wrapper>
            <Anim/>
            <Anim/>
            <Anim/>
            <Anim/>
            <Anim/>
            <Anim/>
        </Wrapper>
    )
}

export default Animation2
