import * as React from 'react';
import Box from '@mui/material/Box';

export default function BreakpointsAsObject() {
  return (
    <div>
      <Box
        sx={{
            border:'1px solid black',
            width: {xs: 100,sm: 200,md: 300,lg: 400,xl: 500,},
        }}
      >
        This box has a responsive width.
      </Box>
    </div>
  );
}
