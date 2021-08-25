import React from 'react'

function Card({name, age, branch}) {
    return (
        <div style={{border:'1px solid black', display:'inline-block', padding:'5px'}}>
            Name: {name} <br/>
            Age: {age} <br/>
            Branch: {branch} 
        </div>
    )
}

export default Card
