import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const theme = createTheme({
    typography:{
        button:{
            fontStyle: 'italic',
            fontWeight: 900
        },
        body1:{
            color: 'red',
        },
        body2:{
            color: 'green'
        },
        subtitle1:{
            color: 'gray',
        },
        sundar:{
            fontSize:45
        }
    }
});

export default function TypographyVariants() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button variant='contained' color='error'>Click Here</Button>   
        {/* it takes button property as default */}
        <Typography>Body</Typography>
        {/* it takes body1 property as default */}
        <Typography variant='body2'>Body</Typography>
        <Typography variant='subtitle1'>subtitle1</Typography>
        <Typography variant='sundar'>subtitle1</Typography>
      </ThemeProvider>
    </div>
  );
}
