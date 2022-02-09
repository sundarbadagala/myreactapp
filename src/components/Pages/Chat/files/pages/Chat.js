import React from 'react'
import { Wrapper, ChatBox} from './chatStyled'

import User from '../UI/organisms/Users/Users'
import Chatting from '../UI/organisms/ChatBox/ChatBox'
import SendBar from '../UI/organisms/Send/SendBar'


function Chat(props) {
    return (
        <Wrapper>
            <User/>
            <ChatBox>
                <Chatting/>
                <SendBar/>
            </ChatBox>
        </Wrapper>
    )
}


export default Chat
