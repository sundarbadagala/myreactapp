import styled from "styled-components";

export const Card = styled.div`
    width: 1140px;
    height: 198px;
    display: flex;
    font-family: 'Poppins', sans-serif;
    box-shadow:0px 0px 3px #A8A8A8;
    & .logo{
        width:100px;
        padding-top:24px;
        padding-left:24px;
    }
`
export const Header= styled.div`
    font-size: 30px;
    width:144px;
    font-family: 'Poppins', sans-serif;
    font-style: Semi-bold 600 italic ;
    
`
export const Info = styled.div`
    
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    padding-top:24px;
    align-items: flex-start;
    width:700px;
`

export const Title= styled.div`
    font-size: 20px;
    font-weight: 600;
    line-height: 2;
    letter-spacing: 0.4px;
`

export const InfoDetails= styled.div`
    line-height: 1.4;
    letter-spacing: 0.4px;
    display: flex;
    justify-content: space-between ;
    margin-top:20px;
    
`

export const InfoName = styled.span`
    margin-right: 10px;
    
`

export const InfoValue = styled(InfoName)`
font-weight: bold;
    padding-right:30px;
    
`

export const Select= styled.div`
    margin-top: 20px;
    font-size:14px;
    color: #d71a63;

    & .note{
        font-weight: bold;
    }
`


export const Exams = styled(Info)`
    width:296px;
    align-items: flex-end;
    padding-top:24px;
    padding-right: 24px;
`

export const ExamFee= styled.div`
    margin-top: 50px;
    margin-right: 38px;
    font-size: 14px;
`

export const ExamCost = styled.div`
    margin-top:4px;
    margin-right: 63px;
    color:#d71a63;
    font-size:24px;
    font-weight: bold;
`