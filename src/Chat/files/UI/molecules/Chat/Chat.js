import React from 'react'
import ReactScrollableFeed from 'react-scrollable-feed'
import {ListItems} from './chatStyled'
import List from '../../atoms/List/List'

function Chatting({singleUserText}) {
    return (
            <ListItems>
                <ReactScrollableFeed>
                    {
                        singleUserText.map(item =>
                            <List
                                key={item}
                                className='chat-list'
                            >
                                <i className="far fa-user-circle"></i> 
                                <span className='item-list'>{item}</span>
                            </List>
                        )
                    }
                </ReactScrollableFeed>
            </ListItems>
    )
}

export default Chatting
