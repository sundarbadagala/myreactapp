import styled from "styled-components";

export const Button = styled.button`
    ${({theme})=> theme.mainButton}
    border: none;
    outline: none;
    color: ${({theme})=> theme.button.btnColor};
    background-color: ${({theme})=> theme.button.btnBackground};
    border: 1px solid ${({theme})=> theme.button.borderColor};
`