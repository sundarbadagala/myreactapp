import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #e5e5e5;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Outer = styled.div`
    border: none;
    outline: none;
    width: 300px;
    height: 300px;
    //padding: 5px 10px;
    border-radius:50%;
    box-shadow:5px 5px 13px #0002,
        -5px -5px 13px #ffff;
    transition: all 0.3s ease-in-out;
    color: #565656;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;

    &:active{
        box-shadow: inset -5px -5px 13px #ffff,
                inset 5px 5px 13px #0002;
            
    }
`
export const Inner = styled.div`
    border: none;
    outline: none;
    width: 200px;
    height: 200px;
    //padding: 5px 10px;
    border-radius:50%;
    box-shadow:5px 5px 13px #ffff,
        -5px -5px 13px #0002;
    transition: all 0.3s ease-in-out;
    color: #565656;
    font-weight: bold;

    &:active{
        box-shadow: inset -5px -5px 13px #0002,
                inset 5px 5px 13px #ffff;
            
    }
`