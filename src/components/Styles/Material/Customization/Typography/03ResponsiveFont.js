import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const theme = createTheme();

theme.typography.main = {
  fontSize: '2.5rem',
  color: 'blue',
  '@media (max-width:800px)': {
    fontSize: '2rem',
    color:'red'
  },
  '@media (max-width:700px)': {
    fontSize: '1.5rem',
    color:'green'
  },
  '@media (max-width:600px)': {
    fontSize: '1rem',
    color:'black'
  }
};

export default function CustomResponsiveFontSizes() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="main">Responsive typography</Typography>
    </ThemeProvider>
  );
}
