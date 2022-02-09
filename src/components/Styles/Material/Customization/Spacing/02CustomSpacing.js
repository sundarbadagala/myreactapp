import { createTheme } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button'
import { ThemeProvider } from 'styled-components'

const theme = createTheme({
    typography:{
        button:{
            fontWeight:'bold'
        }
    }
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            {/* <Button sx={{margin:theme.spacing(2)}} variant='contained'>Click Here</Button>
            <Button sx={{margin:theme.spacing(2)}}  variant='contained'>Click Here</Button> */}
            <Button>Click Here</Button>
            <Button>Click Here</Button>
        </ThemeProvider>
    )
}

export default App
