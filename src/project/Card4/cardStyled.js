
import styled from 'styled-components'

export const Wrapper= styled.div`
    /* border: 1px solid black; */
    width: 948px;
    height: 243px;
    display: flex;
    box-shadow: 0 16px 32px 0 rgba(221, 230, 237, 0.4);
    font-family: 'Poppins', sans-serif;
`
export const Logo= styled.div`
    width: 306px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Details= styled.div`
    width: 642px;
    margin-right: 26px;

    & .details-header{
        font-size: 24px;
        font-weight: bold;
        margin-top: 24px;
    }

    & .details-info{
        font-size: 16px;
        line-height: 1.5;
        color: #565656;
        margin-top: 10px;
    }

    & .details-btns{
        margin-top: 28px;
    }
`

export const Button= styled.button`
    padding: 12px 24px;
    border-radius: 24px;
    font-size: 14px;
    text-align: center;
    line-height: 1.43;
    font-weight: bold;
    margin-right: 12px;
    border: none;
    outline:none;
    color:#ffff;
`
export const ButtonPrimary = styled(Button)`
    background-color: #d71a63;
`
export const ButtonSecondary = styled(Button)`
    background-color:#254082;
`