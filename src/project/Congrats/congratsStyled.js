
import styled from 'styled-components'

export const Wrapper = styled.div`
    width:1104px;
    height: 537px;
    box-shadow: 1px 1px 3px #d1d1e0;
    font-family: 'Poppins', sans-serif;
    border-radius: 6px;
`

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 122px;
`
export const Image = styled.img`
    width:144px;
    height: 96px;
`

export const Header = styled.div`
    width: 321.7px;
    height: 24px;
    text-align: center;
    font-size: 24px;
    line-height: 1;
    font-weight: bold;
    margin-top: 16px;
    margin-bottom: 16px;
    padding:0px;
`

export const Message= styled.div`
    width: 321.7px;
    height: 48px;
    /* border: 1px solid black; */
    font-size: 14px;
    padding: 0px 30px ;
    text-align: center;
`

export const Button = styled.button`
    width: 143px;
    height: 48px;
    background-color:#d71a63;
    border: none;
    outline: none;
    border-radius: 24px;
    padding:12px 24px ;
    color: white;
    font-weight: bold;
    margin-top: 12px;
    font-size: 16px;
`
export const Receipt = styled.div`
    display: flex;
    justify-content: flex-end;
    color: #d71a63;
    text-decoration:underline;
    font-weight: bold;
    padding-top: 24px;
    padding-right: 23px;
    font-size: 16px;

    & .receipt{
        margin-right: 8px;
    }
`
