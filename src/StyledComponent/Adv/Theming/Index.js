import React,{Fragment} from 'react'
import {Wrapper, Button} from './indexStyled'
import {ThemeProvider } from 'styled-components'
import {theme} from './theme'
import GlobalStyles from './globalStyles'
import Content from './Content'

function App() {
    return (
            <>
            <ThemeProvider theme={theme}>
            <GlobalStyles/>
                 <Wrapper>                     
                    <Button>Click Here</Button>
                    <Content/>
                </Wrapper>
            </ThemeProvider>
            </>
    )
}

export default App
