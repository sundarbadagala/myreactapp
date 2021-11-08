import React from 'react'
import {createTheme, ThemeProvider, styled as styles} from '@mui/material/styles'
import {Button} from '@mui/material'
import styled from 'styled-components'

const theme= createTheme({
    color:{
        first:'#31fb09',
        second:'#bd6e00',
        third:'#6500a8'
    },
    bgColor:{
        first:'#edff7a',
        second:'#fec16c',
        third:'#c672fe'
    },
    typography:{
        header:'24px',
        title:'20px',
        text:'16px',
        subtitle:'12px'
    }
})

const CustomButton= styles(Button)(({theme})=>({
    color: theme.color.third,
    backgroundColor: theme.bgColor.third,
    // padding: '10px',
    '&:hover':{
        color: theme.color.first,
        backgroundColor: theme.bgColor.first
    }
}))

const Wrapper = styles('div')({
    border:'1px solid black',
    backgroundColor:'orange',
    width:'300px',
    padding:7
})
const Header= styles('div')({
    color: 'red',
    fontWeight:'bold',
    fontSize:'40px'
})

const Footer = styled.div`
    font-size: 30px ;
    color: green;
`

const Body= styles('div')(({theme})=>({
    color: '#1805f0',
    fontSize: theme.typography.header
}))

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CustomButton>Custome Button</CustomButton>
            <Button variant='contained'>Click</Button>
            <Wrapper>
                <Header>
                    Hello World
                </Header>
                <Body>This is Body</Body>
                <Footer>Bye World</Footer>
            </Wrapper>
        </ThemeProvider>
    )
}

export default App
