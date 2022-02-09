import styled from "styled-components";


export const Users= styled.div`
    /* border: 1px solid blue; */
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    /* border-right: 1px solid gray; */
    padding-left: 0px;
    background-color: white;
    height: 500px;
    width: 250px;
    overflow: scroll;
    box-shadow: -5px 5px 10px black;
    background-color: white;
    z-index: 1;

    & .header-user{
        color: blue;
        width: 15%;
        font-weight: bold;
        margin-bottom: 5px;
        margin-top: 0px;
        padding:17px ;
        position: fixed;
        background-color: #ffff;
        /* border: 1px solid red; */
        border-top-left-radius: 5px;

        z-index: 1;
    }

    & .users-list{
        font-size: 20px;
        color: blue;
        padding: 6px 20px;
        cursor: pointer;
        position: relative;
        top: 70px; 
        border-left: 5px solid transparent;
    }
    & .active{
        border-left: 5px solid rgba(55,133,199,255);
    }

    & .fas{
        margin-right: 5px;
    }

    & .users-input{
        border: none;
        outline: none;
        border-bottom: 1px solid blue ;
        padding: 5px 0px;
        font-size: 20px;
        width: 150px;
        margin-top: 70px;
        margin-left: 20px;
    }

    & .users-add-btn{
        border: none;
        color: blue;
        background-color: #ffff;
        font-size: 20px;
    }

    & .nav-list{
        text-decoration: none;
    }
`
