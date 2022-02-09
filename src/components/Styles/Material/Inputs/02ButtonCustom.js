import React from 'react'
import {Button} from '@mui/material'
import {createTheme, ThemeProvider} from '@mui/material/styles'

const theme = createTheme({
    palette:{
        dark:{
            main:'#000000',
            contrastText:'#ffff'
        },
        lite:{
            main:'#FF69B4',
            contrastText:'yellow'
        }
    }
})

function App() {
    return (
        <div>
            <Button variant='contained' color='primary'>Primary</Button>
            <Button variant='contained' color='info'>Info</Button>
            <Button variant='contained' color='secondary'>Secondary</Button>
            <Button variant='contained' color='warning'>Warning</Button>
            <Button variant='contained' color='error'>Error</Button>
            <hr/>
            <ThemeProvider theme={theme}>
                <Button variant='contained' color='dark'>Custom dark button</Button>
                <Button variant='contained' color='lite'>Custom lite button</Button>
            </ThemeProvider>
        </div>
    )
}

export default App
