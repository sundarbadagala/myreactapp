import React, {useRef} from 'react'
import IdleTimer from 'react-idle-timer'

function Timer() {
    const timeRef = useRef(null)
    const onIdle=()=>{
        console.log('user idle')
        // alert('submitted')
    }
    return (
        <div>
            user can Idle after 5 seconds
            <IdleTimer ref={timeRef} timeout={5 * 1000} onIdle={onIdle}></IdleTimer>
        </div>
    )
}

export default Timer
