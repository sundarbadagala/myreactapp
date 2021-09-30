import React from 'react'
import styled from 'styled-components'

const Container = styled.div.attrs(()=>({tabIndex:0}))`
    background:yellow;

    &:hover{
        background:lime;
    }
    & ~ &{
        background:cyan;  // oka container ki veroka container ki madhyalo div or input or button etc evaina vachinappudu, next conainer ki ee props apply avutay
    }
    & + &{
        background:hotpink; //Container tarvata next vache every Container ki ee props apply avutay
    }
    &.primary{
        background:lime;
    }
    .secondary &{
        background:orange;
    }
    
`

function Practice2() {
    return (
        <div>
            <Container>Main</Container>
            <Container>Main next</Container>
            <div>Division</div>
            <Container>Main After Division ~</Container>
            <Container>Main next</Container>
            <div>Division</div>
            <Container>Main After Division ~</Container>
            <Container>Main next</Container>
            <Container>Main next</Container>
            <div>
                <Container>Main Inside the division</Container>
            </div>
            <div>
                <Container>Main in another Division</Container>
            </div>
            <Container>Main After divisions but ikkada division lopala Container inlude chesam</Container>
            <Container>Main next</Container>
            <hr/>
            <hr/>
            <Container className='primary'>Main with className</Container>
            <div className='secondary'>
                <Container>Main inside the division ikkada division ki className assign chesam</Container>
            </div>
        </div>
    )
}

export default Practice2
