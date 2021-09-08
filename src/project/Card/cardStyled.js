import styled from "styled-components";

export const Card = styled.div`
    width: 1140px;
    height: 198px;
    display: flex;
    font-family: 'Poppins', sans-serif;
    box-shadow:0px 0px 3px #A8A8A8;
    background-color:${props => props.bgColor || "#fffff"};
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
export const InfoName = styled.span`
    margin-right: 10px;
`

export const InfoValue = styled(InfoName)`
    font-weight: bold;
    padding-right:30px;
`
export const InfoDetails= styled.div`
    line-height: 1.4;
    letter-spacing: 0.4px;
    display: flex;
    justify-content: space-between ;
    margin-top:20px;
    
`
export const Select= styled.div`
    margin-top: 20px;
    letter-spacing:0.32px;
`
export const SelectInput = styled.select`
    padding:7px 150px;
    text-align:start;
    margin-left:5px;
    padding-left: 0;
`

export const Exams = styled(Info)`
    width:296px;
    align-items: flex-end;
    padding-top:24px;
    padding-right: 24px;
`
export const ExamDetails= styled.div`

`
export const CheckBox= styled.div`
    .checkbox &{
        color: red;
        border:1px solid black
        
    }
`
export const ExamFee= styled.div`
    margin-top: 22px;
`

export const ExamCost = styled.div`
    margin-top:5px;
    color:#d71a63;
    font-size:36px;
    font-weight: bold;
`
export const ExamStudents= styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
`
export const ExamsStudentsValue= styled(ExamStudents)`
font-weight: 900;
margin-left: 10px;
`
