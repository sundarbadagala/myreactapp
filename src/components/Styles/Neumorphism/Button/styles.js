import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #e5e5e5;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Box = styled.button`
    border: none;
    outline: none;
    border-radius:20px;
    width: 110px;
    height: 40px;
    transition: all 0.1s ease-in-out;
    box-shadow: inset -5px -5px 13px #0002,
                inset 5px 5px 13px #ffff;

    &:active{
        box-shadow: inset 5px 5px 13px #0002,
            inset -5px -5px 13px #ffff;  
    }

    p{
        font-size: 16px;
        color: #565656;
        font-weight: bold;
        /* padding: 10px 20px; */
    }
    p:active{
        font-size: 15px;
    }
`