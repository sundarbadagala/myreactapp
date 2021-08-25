import React, { useState } from 'react'

function PracticeSub({question, answer}) {
    const [show, setShow]= useState(false)
    return (
        <div>
            <h3>
                {question} 
                <button onClick={()=>setShow(!show)}>
                    {show ? 'hide':'show'}
                </button>
            </h3>
            {
                show && <h5>{answer}</h5>
            }
        </div>
    )
}

export default PracticeSub
