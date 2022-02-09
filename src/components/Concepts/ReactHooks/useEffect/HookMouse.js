import React, {useState, useEffect} from 'react'

function HookMouse() {
    const [x, setX]= useState(0)
    const [y, setY]= useState(0)

    const logMousePosition=e=>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('useEffect Called')
        window.addEventListener('mousemove', logMousePosition)

        return ()=> {
            console.log('component Unmounting Code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])
        
        //wihtout [] useEffect called every time after mouse event 
        //this effect the efficiency of app
        //our task is to call useEffect only once at page open
        //it will happen by adding empty array []

    return (
        <div>

            Check console for better understanding <hr/>
            Hook X-{x} Y-{y}
        </div>
    )
}

export default HookMouse
