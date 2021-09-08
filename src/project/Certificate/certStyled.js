import styled from 'styled-components'


export const Wrapper = styled.div`
    font-family: 'Poppins', sans-serif;

`

export const MainBar = styled.div`
    width: 1144px;
    height: 84px;
    background-image: linear-gradient(90deg, #ec008c, #ff5757) ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
`
export const Logo = styled.div`
    display: flex;
    align-items: center;

    & .logo{
        width: 64px;
        height: 64px;
        padding: 10px 32px;
        padding-right: 24px;
    }

    & .heading{
        font-size: 32px;
        font-weight: bold;
    }
`
export const Click = styled.div`
    padding-right: 32px;

    & .fas{
        margin-left: 10px;
    }
`
export const Main = styled.div`
    margin-top: 25px;
    width: 1144px;
    height: 691px;
    box-shadow: 1px 1px 3px #d1e0e0;
`
export const MainCard= styled.div`
    
    display: flex;
`
export const MainCardLogo= styled.div`
    padding-top: 42px;
    padding-left: 42px;
`
export const MainCardInfo= styled.div`
    padding-top: 42px;
    padding-left:38px ;

    & .header{
        font-size: 24px;
        font-weight: bold;
    }
`
export const MainCardDetails= styled.div`
    display: flex;
    margin-top: 21px;

    & .mainCardDetails{
        margin-top: 27px;
    }
`
export const ExamDetailsName = styled.span`
    margin-right: 12px;
`

export const ExamDetailsValue = styled.span`
    font-weight: bold;
    padding-right:30px;
`
export const Result = styled.div`
    padding-top: 97px;
    margin-left: 77px;
`
export const Button = styled.button`
    width: 172px;
    height: 48px;
    border: none;
    outline: none;
    background-color: #ec008c;
    color: white;
    
    border-radius: 6px;
`
export const Line = styled.div`
    width: 1096px;
    height: 1px;
    background-color: #d1e0e0;
    margin-left: 24px;
    margin-top: 24px;
`
export const MockTest=styled.div`
    width: 572px;
    height: 84px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
export const MockTestLogo= styled.div`
    display: flex;
    align-items: center;
    margin-top: 32px;

    & .logo{
        width: 64px;
        height: 64px;
        padding: 10px 32px;
        padding-right: 24px;
    }

    & .heading{
        font-size: 20px;
        font-weight: bold;
    }
`
export const MockTestPractice= styled.div`
    padding-right: 32px;
    font-size: 16px;
    opacity: 0.3;
    color: #d71a63;
    margin-top: 32px;
    display: flex;
    justify-content: center;
    align-items: center;

    & .fas{
        margin-left: 10px;
        
    }

    & .mockTestDoc{
        margin-right: 10px;
        
    }
`
export const Exams = styled.div`
    display: flex;
`
export const VLine= styled.div`
    height: 92px;
    width: 1px;
    background-color: #d1e0e0;
    margin-top: 22px;
    margin-bottom: 22px;

`
export const HLine= styled.div`
    width: 532px;
    height: 1px;
    background-color: #d1e0e0;
    margin-left: 22px;
    margin-top: 48px;
`
export const Instruction = styled.div`
    & .heading{
        margin-left: 24px;
        margin-top: 30px;
        font-size: 20px;
        font-weight: bold;
    }

    & .list{
        list-style-type: circle;
        margin-left: 50px;
    }
`