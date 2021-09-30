import {css} from 'styled-components'



const MainButton= css`
    font-size: 24px;
    padding: 5px 10px;
`

export const lite = {
  bgColor:'white', 
  button: {
    btnColor: "black",
    btnBackground: "white",
    borderColor: "black",
  },
  text:{
    color:'black'
  },
  mainButton: MainButton
};

export const dark = {
  bgColor:'black', 
  button: {
    btnColor: "white",
    btnBackground: "black",
    borderColor: "black",
  },
  text:{
    color:'white'
  },
  mainButton: MainButton
};
