import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html,body{
        width: 100%;
        height: 100vh;
        background-color: ${({theme})=> theme.bgColor};
    }
`

export default GlobalStyles