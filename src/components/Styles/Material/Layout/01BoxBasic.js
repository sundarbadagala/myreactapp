import React from 'react'
import Box from '@mui/material/Box'

//box nothing but div

function App() {
    return (
        <div>
            <Box
                sx={{
                    width: 200,
                    height:200,
                    backgroundColor:'primary.light',
                    color: 'white',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    '&:hover':{
                         backgroundColor:'primary.main'
                    },
                    '&:active':{
                        backgroundColor:'primary.dark'
                    },
                }}
            >
                MATERIAL BOX
            </Box>
         </div>
    )
}

export default App
