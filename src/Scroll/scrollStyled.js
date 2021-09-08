import styled from 'styled-components'


export const Wrapper = styled.div`
`
export const Page= styled.div`
    height: 100vh;
    background-color: ${props => props.bgColor || 'yellow'};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    font-weight: bold;
    position: relative;
`
export const Button = styled.button`
    background-color: black;
    color: white;
    padding: 10px 15px;
    border: 2px solid black;
    font-size: 20px;
    cursor: pointer;

    &:hover{
        background-color: transparent;
        color: black;
        border: 2px solid black;
    }
`
export const Navbar = styled.nav`
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0px 50px;
    background-image: repeating-linear-gradient(
        -45deg,
        #ffffff 0px,
        #ffffff 10px,
        #dddddd 10px,
        #dddddd 20px
    );
`
export const Down = styled.div`
    position: absolute;
    /* left: 10%; */
    bottom: 10%;
    cursor: pointer;
`