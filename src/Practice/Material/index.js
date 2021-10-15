import React from 'react'
import {Button} from '@mui/material'
import {btnStyles} from './styles'

function App() {
    return (
        <div>
            <Button sx={btnStyles} variant='contained'>Click Here</Button>
        </div>
    )
}

export default App
