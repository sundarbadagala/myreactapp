import styled from 'styled-components'

export const Wrapper= styled.div`
    width:360px;
    height: 474px;
    box-shadow: 0 16px 32px 0 rgba(221, 230, 237, 0.4);
    padding: 24px;
    font-family: 'Poppins', sans-serif;
`

export const Header= styled.div`
    /* border: 1px solid black; */
    width: 312px;
    height: 56px;
    display: flex;
    justify-content: space-between;

    & .header-details{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
    }
    
    & .header-exam{
        font-size: 12px;
        line-height: 1.67;
        color: #464646;
    }

    & .header-fee{
        font-size: 24px;
        font-weight: bold;
        color: #d71a63;
    }
`
export const Title= styled.div`
    /* border: 1px solid black; */
    width: 312px;
    height: 48px;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    color: #242424;
    margin-top:12px ;
`

export const Info= styled.div`
    display: flex;
    flex-wrap: wrap;

`
export const SingleInfo= styled.div`
    border-left: ${props => props.border ? '1px solid #dbdbdb' : '1px solid transperant'};
    padding-left:6px ;
    width:102px;
    height: 54px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-content: space-between;
    margin-top: 12px;

    & .singleinfo-title{
        font-weight: bold;
        height: 24px;
        font-size: 12px;
        line-height: 1.67;
    }

    & .singleinfo-details{
        font-size: 14px;
        line-height: 1.71;
        color: #464646;
        height: 24px;
    }

    
`

export const List = styled.ul`
    width: 312px;
    height: 148px;
    border: 1px solid red;
    list-style-type:circle;
    /* margin-left:24px; */
    font-size: 12px;
    line-height: 1.67;
    color: #464646;

    & li{
        height: 24px;
        margin: 6px 0px;
    }
`
export const Footer = styled.div`
    width: 312px;
    height: 42px;
    /* border: 1px solid blue; */
    position: relative;
    top: -10px;
    background-color: white;
    box-shadow: -12px -12px 10px white;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .footer-more{
        font-size: 12px;
        font-weight: bold;
    }
`

export const Button = styled.button`
    width: 115px;
    height: 42px;
    background-color: #d71a63;
    color: white;
    border: none;
    outline: none;
    border-radius: 24px;

    & .fas{
        margin: 0px 8px;
    }
`