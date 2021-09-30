import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
    color: ${({theme})=> theme.text.color};
`

function Content() {
    return (
        <Text>
            <h1>Hello world</h1>
            <h3>Styled Components</h3>
            <p>Applying styled components for dark theme</p>
        </Text>
    )
}

export default Content
