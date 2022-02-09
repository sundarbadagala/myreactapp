import {css} from 'styled-components'

const commonStyles= css`
    border: none;
    outline: none;
`

const MainButton= css`
    font-size: 32px;
    padding: 10px 20px;
    ${commonStyles}
`
const SubButton=css`
    font-size: 24px;
    padding: 7px 10px;
    ${commonStyles}
`


export const theme={
    primary:'blue',
    secondary:'grye',
    warning:'orange',
    success:'green',
    danger:'red',
    dark:'black',
    lite:'white',
    mainButton: MainButton,
    subButton: SubButton
}