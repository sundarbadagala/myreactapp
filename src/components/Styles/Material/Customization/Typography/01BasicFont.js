import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import React from 'react'
// import Box from '@mui/material/Box'

const theme= createTheme({
    typography:{
        header:'30px',
        title:'28px',
        text:'16px',
        subtitle:'12px'
    }
})

const Header= styled('div')(({theme})=>({
    fontSize: theme.typography.header
}))

const Title = styled('div')(({theme})=>({
    fontSize: theme.typography.title
}))

const Subtitle = styled('div')(({theme})=>({
    fontSize: theme.typography.subtitle
}))



function App() {
    return (
        <ThemeProvider theme={theme}>
            <Header>This is Header</Header>
            <Title>This is Title</Title>
            <Subtitle>This is Subtitle</Subtitle>
        </ThemeProvider>
    )
}

export default App
