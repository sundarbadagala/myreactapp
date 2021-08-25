import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

`
const Button= styled.button`
    background: ${props => props.primary ? 'blue' : 'hotpink' };
    border:2px solid transparent;
    outline:none;
    padding:5px 15px;
    font-size:20px;

    &:hover{
        border: 2px solid ${props => props.primary ? 'blue' : 'hotpink'};
        background:transparent; 
    }
`

function Button2() {
    return (
        <Wrapper>
            <Button>
                Click Here
            </Button>
            <Button primary>
                Click Here
            </Button>
        </Wrapper>        
    )
}

export default Button2
