import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme()

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box>
            <Button variant='contained' color='warning' sx={{margin:theme.spacing(2)}}>Click Here</Button>
            <Button variant='contained' sx={{margin:theme.spacing(2)}}>Click Here</Button>
            <Button variant='contained' sx={{margin:theme.spacing(2)}}>Click Here</Button>
            </Box>
        </ThemeProvider>
    )
}

export default App
