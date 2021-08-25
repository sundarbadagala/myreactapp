import React from 'react'
import {UserConsumer} from './UserContext'

function Card2() {
    return (
        <UserConsumer>
            {
                (user)=>{
                    return(
                        <div>
                            {
                                user.map(item => <div key={item.id}>{item.name}</div>)
                            }
                        </div>
                    )
                }
            }
        </UserConsumer>
    )
}

export default Card2
