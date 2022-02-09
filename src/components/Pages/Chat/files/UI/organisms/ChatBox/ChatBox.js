import React from 'react'
import {useSelector} from 'react-redux'
import Header from '../../atoms/Header/Header'
import Chat from '../../molecules/Chat/Chat'
import {Messages} from './chatboxStyled'

function ChatBox() {
    const message= useSelector(state => state.users.message)
    const userId = useSelector(state => state.users.userId)
    let singleUserText =  message.filter(item => item.id === userId)
    singleUserText=singleUserText.length?singleUserText[0].text:[]
    console.log(message)
    
    return (
        <Messages>
            <Header className='msg-header'>Chat Messages</Header>
            <Chat singleUserText={singleUserText}/>
        </Messages>
    )
}



export default ChatBox
