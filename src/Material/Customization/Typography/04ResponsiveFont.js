import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const theme = createTheme();

theme.typography.main = {
//   fontSize: '1.2rem',

    [theme.breakpoints.down('xl')]: {   //1536px
    fontSize: '3rem',
  },
  [theme.breakpoints.down('lg')]: {     //1200px
    fontSize: '2.5rem',
  },
  [theme.breakpoints.down('md')]: {     //900px
    fontSize: '2rem',
  },
  [theme.breakpoints.down('sm')]: { //600px
    fontSize: '1.5rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1rem',
  },
};

export default function CustomResponsiveFontSizes() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="main">Responsive h3</Typography>
    </ThemeProvider>
  );
}
