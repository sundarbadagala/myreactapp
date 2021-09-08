import styled from "styled-components";


export const User= styled.div`
        font-size: 20px;
        color: blue;
        padding: 6px 20px;
        cursor: pointer;
        position: relative;
        top: 70px; 
        border-left: 5px solid transparent;
        
    & .active{
        border-left: 5px solid rgba(55,133,199,255);
    }

`
