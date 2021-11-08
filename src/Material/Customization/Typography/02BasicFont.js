import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const theme = createTheme();

theme.typography.main = {
  fontSize: '24px',
  color: 'blue',
};

theme.typography.heading = {
    fontSize: '50px'
}

export default function CustomResponsiveFontSizes() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="main">typography main with 24px</Typography><br/>
      <Typography variant="heading">Typography heading with 50px</Typography>
    </ThemeProvider>
  );
}
