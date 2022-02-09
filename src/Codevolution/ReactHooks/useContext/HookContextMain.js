import React from 'react'
import ContextA from './HookContextA'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function HookContextMain() {
    return (
        <div>
            <UserContext.Provider value='RAM'>
                <ChannelContext.Provider value='SITA'>
                    <ContextA/>
                </ChannelContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default HookContextMain
