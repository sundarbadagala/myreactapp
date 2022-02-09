import styled from "styled-components"

export const Messages= styled.div`
margin: 0;
padding: 0;

& .msg-header{
    background-image: linear-gradient(45deg, blue, aqua, blue);
    color: white;
    font-weight: bold;
    font-size: 20px;
    margin: 0px;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 15px;
    padding-left: 10px;
    border-top-right-radius: 6px;
}
& .list-items{
    margin-top: 0px;
    margin-left: 0px;
    border-bottom: 2px solid blue;
    height: 360px;
    overflow: scroll;
}
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
