import React, {useState, useEffect} from "react"
import randomcolor from "randomcolor"

function App() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")
    
    useEffect(() => {
        setColor(randomcolor)
    }, [count])
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)
        
        return ()=>{
            clearInterval(interval)    
        }
        
        // setColor(randomcolor())
    }, [count])
    
    return (
        <div>
            <h1 style={{color: color}}>{count}</h1>
        </div>
    )
}

export default App