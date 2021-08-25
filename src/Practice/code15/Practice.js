import React, { useState, useEffect } from 'react'

function Practice() {
    const [value, setValue]= useState(0)
    const clickDecrement=()=>{
        if(value !== 0){
            setValue(value -1)
        }else{
            setValue(5)
        }
    }
    useEffect(()=>{
        const interval = setInterval(clickDecrement, 1000)
        return ()=>{
            clearInterval(interval)
        }
    }, [clickDecrement])
    return (
        <div>
            {value}
        </div>
    )
}

export default Practice
