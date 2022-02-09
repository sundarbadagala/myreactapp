import React from 'react'
import {Button, IconButton} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

function App() {
    return (
        <div>
            <Button variant='outlined' startIcon={<DeleteIcon/>}>Delete</Button>
            <Button variant='contained' endIcon={<SendIcon/>}>Send</Button>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
            <IconButton color='primary'>
                <DeleteIcon/>
            </IconButton>
        </div>
    )
}

export default App
