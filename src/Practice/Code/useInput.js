import {useState, useEffect} from 'react'

function Input(initialValue){
    const [count, setCount]= useState(initialValue)  
    useEffect(()=>{
        const interval= setInterval(()=>{
            setCount(count + 1)
        }, 1000)
        return ()=>{
            clearInterval(interval)
        }
    }, [count])
    return [count]
}
export default Input;