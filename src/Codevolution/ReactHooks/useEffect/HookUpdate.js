import React, {useEffect, useState} from 'react'

function HookUpdate() {
    const [count, setCount]= useState(0)
    const [name, setName]= useState('')
    useEffect(()=>{
        console.log('useEffect data updated')
        document.title=`clicked ${count} times`
    },[count])
    return (
        <div>
            Check console <br/>
            the value will upadted when u clicked button but not change text input<hr/>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
            {name}
        </div>
    )
}

export default HookUpdate
