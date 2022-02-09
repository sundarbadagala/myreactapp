import * as React from 'react';
import { ThemeProvider} from '@mui/styles';
import {themeInstance} from './theme'
import DeepChild from './button';

export default function Theming() {
  return (
    <ThemeProvider theme={themeInstance}>
      <DeepChild />
    </ThemeProvider>
  );
}
