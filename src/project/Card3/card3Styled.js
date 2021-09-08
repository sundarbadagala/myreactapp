import styled from 'styled-components'

export const Wrapper = styled.div`
    width:1104px;
    height: 339px;
    display: flex;
    font-family: 'Poppins', sans-serif;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    background-color: white;
    
`
export const Logo= styled.div`
    margin: 24px;
`

export const Main= styled.div`
    margin-top: 34px;
    margin-right: 24px;
    flex-grow: 1;
    /* border: 1px solid black; */

`

export const Header = styled.div`
    font-size: 24px;
    font-weight: bold;
` 
export const Exam = styled.div`
    display: flex;
    justify-content:space-around;
    /* border: 1px solid black; */
    margin-right: 24px;
    
    & .exam{
        text-align: center;
    }

    & .examInfo{
        font-size: 12px;
        margin-top: 24px;
        margin-bottom: 12px;
    }

    & .examDetails{
        font-size: 14px;
        font-weight: bold;
    }
`
export const VLine = styled.div`
    width: 1px;
    height: 70px;
    background-color: #d1d1d8;
    margin-top: 17px;

`
export const HLine = styled.div`
    width: 885px;
    height: 1px;
    background-color: #d1d1d8;
    margin-top: 8px;
`

export const ButtonGrid= styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 24px;

    & .mock-button{
        width: 249px;
        height: 48px;
        border: 2px solid #464646;
        outline:none;
        background-color: #ffff;
        border-radius: 24px;
        color: #464646;
        font-size: 16px;
        font-weight: bold;
    }

    & .test-button{
        width: 126px;
        height: 48px;
        border-radius: 24px;
        border: none;
        background-color:#d71a63 ;
        color: #ffff;
        font-weight: bold;
        font-size: 16px;
    }
`