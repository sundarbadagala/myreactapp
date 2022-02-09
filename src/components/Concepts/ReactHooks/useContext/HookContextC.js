import React, {useContext} from 'react'
import {UserContext, ChannelContext} from './HookContextMain'

function HookContextC() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
            {user} - {channel}
        </div>
    )
}

export default HookContextC