import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body{
        width: 100%;
        height: 100vh;
        background-color: #f5e1e1;
    }
`
export default GlobalStyles