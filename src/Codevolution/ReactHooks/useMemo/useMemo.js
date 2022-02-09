import React, {useState, useMemo} from 'react'

function Memo() {
    const [counterOne, setCounterOne]= useState(0)
    const [counterTwo, setCounterTwo]= useState(0)

    const incrementOne = ()=>{
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = ()=>{
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(()=>{
        let i =0;
        while(i< 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])

    return (
        <div>
            <button onClick={incrementOne}>Counter One - {counterOne}</button>
            {isEven ? 'EVEN':'ODD'}
            <br/>
            <button onClick={incrementTwo}>Counter Two - {counterTwo}</button>
        </div>
    )
}

export default Memo
