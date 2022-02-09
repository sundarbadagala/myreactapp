import React, {useEffect, useRef} from 'react'

function Ref() {
    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[inputRef])

    return (
        <div>
            <input type='text' ref={inputRef}/>
        </div>
    )
}

export default Ref
