import React from 'react'
import {UserConsumer} from './UserContext'

function Card() {
    return (
        <UserConsumer>
            {
                (user)=>{
                    return(
                        <div>
                            {
                                user.map(item => <div key={item.id}>{item.age}</div>)
                            }
                        </div>
                    )
                }
            }
        </UserConsumer>
    )
}

export default Card
