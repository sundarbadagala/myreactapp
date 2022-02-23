import React, {useState} from "react";
import { Fragment } from "react";
import Content from './Content'

import { lite, dark } from "./theme";
import { Button } from "./styles";
import GlobalStyles from "./GlobalStyles";
import With from './withTheme'
import Context from './themeContext.js'
import { ThemeProvider } from "styled-components";

function Index() {
    const [mode, setMode]= useState(true)
  return (
    <Fragment>
        <ThemeProvider theme={mode ? lite : dark}>
        <GlobalStyles/>
        <Button>Click Here</Button>
        <Button onClick={()=>setMode(!mode)}>Dark/Lite</Button>
        <Content/>
        <With/>
        <Context/>
      </ThemeProvider>      
    </Fragment>
  );
}

export default Index;
