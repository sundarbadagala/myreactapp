import React, { useState } from 'react'

function Loops() {
    let data=[]
    let value = 'hello world'
    const content=()=>{
        let m=6
        for(let i=0; i<m; i++){
            data.push(value)
        }
        return data
    }
    console.log(content())
    return (
        <div>
            {
                data.map(item => <div>{item}</div>)
            }
        </div>
    )
}

export default Loops
