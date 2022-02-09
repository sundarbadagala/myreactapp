import React from 'react'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import { Button, Box } from '@mui/material'

const theme = createTheme({
    palette:{
        primary:{
            main:'#0b3bcb'
        },
        secondary:{
            main:'#cd0a0a'
        },
        info:{
            main:'#e1eda6',
            
        }  
    }
})

function App() {

    return (
        <ThemeProvider theme={theme}>
            <Button >
                Primary
            </Button>
            <Button color='secondary' variant='contained'>
                Secondary
            </Button>
            <Button color='info' variant='contained'>
                Info
            </Button>
            <Box sx={{color:'blue'}}>
                Internal 
            </Box>
        </ThemeProvider>
    )
}

export default App
