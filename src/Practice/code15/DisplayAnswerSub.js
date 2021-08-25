import React, { useState } from 'react'

function DisplayAnswerSub({question, answer}) {
    const [showInfo, setShowInfo]= useState(false)
    return (
        <div>
            <h4 style={{color:'red'}}>{question} <button onClick={()=>setShowInfo(!showInfo)}>{showInfo ? 'hide':'show'}</button></h4>
            <h5 style={{color:'blue'}}>{showInfo && answer}</h5>
        </div>
    )
}

export default DisplayAnswerSub
