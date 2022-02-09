import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import { lite, dark } from "./theme";
import { Button } from "./styles";
import { Fragment } from "react";
import GlobalStyles from "./GlobalStyles";
import Content from './Content'
import With from './withTheme'
import Context from './themeContext.js'

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
