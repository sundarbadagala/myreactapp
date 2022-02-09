import React from 'react'

function Card({item}) {
    return (
        <div style={{border:'1px solid black', display:'inline-block', padding:'5px'}}>
            Name: {item.name} <br/>
            Age: {item.age} <br/>
            Branch: {item.branch} 
        </div>
    )
}

export default Card
