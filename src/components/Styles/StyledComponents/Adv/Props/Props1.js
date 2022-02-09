import React from 'react'
import styled from 'styled-components'

function App() {
    const Button = styled.button`
        border: none;
        outline: none;
        padding: 5px 7px;
        border-radius: 3px;
    `
    const MainButton= styled(Button)`
        background-color: skyblue;
    `
    const PrimaryButton= styled(Button)`
        background-color: ${props => props.primary ? 'blue' : '#dcdcdc' };
        color: ${props => props.primary ? 'white' : 'black' };
    `
    const OriginalButton= styled(Button)`
        background-color: ${props => props.bgColor || 'red'};
    `
    return (
        <div>
            <Button>
                Click Here
            </Button>
            <MainButton>
                Main Button
            </MainButton>
            <PrimaryButton>
                Primary Button
            </PrimaryButton>
            <PrimaryButton primary>
                Primary Button
            </PrimaryButton>
            <OriginalButton>
                Original Button
            </OriginalButton>
            <OriginalButton bgColor='yellow'>
                Original Button
            </OriginalButton>
            <OriginalButton bgColor='orange'>
                Original Button
            </OriginalButton>
        </div>
    )
}

export default App
