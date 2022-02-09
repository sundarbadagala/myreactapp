import styled from "styled-components";

export const Send = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;

    & .message-input{
        border: none;
        outline: none;
        /* border-bottom: 1px solid blue ; */
        padding: 5px 10px;
        font-size: 16px;
        width: 750px;
    }

    & .send-btn{
        border: none;
        color: blue;
        background-color: #ffff;
        font-size: 20px;
        border: 1px solid blue;
        padding: 5px 15px;
        border-radius: 19px;
        cursor: pointer;
    }

    & .send-label{
        position: relative;
        top: -14px;
        right: -0.2px;
        background-color: white;
        color: blue;
        padding: 0px 10px;
        font-weight: bold;
        border-radius: 20px;
    }
`

