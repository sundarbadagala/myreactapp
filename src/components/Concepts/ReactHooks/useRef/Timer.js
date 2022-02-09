import React, {useState, useEffect, useRef} from 'react'

function Timer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()
    useEffect(() => {
        intervalRef.current = setInterval(()=>{
            setTimer( timer + 1)
        }, 500)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [timer])
    return (
        <div>
            <h3>{timer}</h3>
            <button onClick={()=>clearInterval(intervalRef.current)}>Clear</button>
        </div>
    )
}

export default Timer
