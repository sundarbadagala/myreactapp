import styled from "styled-components"

export const ListItems= styled.ul`
    margin-top: 0px;
    margin-left: 0px;
    border-bottom: 2px solid blue;
    height: 360px;
    overflow: scroll;
& .chat-list{
    margin-right: 20px;
    color: black;
    display: block;
    font-size: 16px;
    padding: 2px 10px;
    display: flex;
    align-items: center;
    margin: 10px 0px;
    animation: slidechat 0.2s ease-out;
    z-index: -2;
}
@keyframes slidechat{
    0%{
        transform: translateX(-10%);
    }
    50%{
        transform: translateX(10%);
    }
    100%{
        transform: translateX(0%);
    }
}

& .far{
    font-size:25px;
    margin-right: 10px;
    color: blue;
}

& .item-list{
    /* border: 1px solid blue; */
    padding: 1px 10px;
    border-radius: 20px;
    background-color: #39fab1;
}
`
