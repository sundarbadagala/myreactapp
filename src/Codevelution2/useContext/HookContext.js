import React, {useContext} from 'react'

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


function ContextA() {
    return (
        <div>
            <ContextB/>
        </div>
    )
}

function ContextB() {
    return (
        <div>
            <ContextC/>
        </div>
    )
}

function ContextC() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
            {user} - {channel}
        </div>
    )
}

export default HookContextMain
