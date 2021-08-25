import React, {useEffect, useState} from 'react'

function HookCounterOne() {
    const [state, setstate] = useState(0)
    useEffect(()=>{
        document.title = `Clicked ${state} times`
    })
    return (
        <div>
            Check the title bar <hr/>
            <button onClick={()=>setstate(state + 1)}>Clicked {state} Times</button>
        </div>
    )
}

export default HookCounterOne
