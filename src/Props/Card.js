import React from 'react'

function Card(props) {
    return (
        <div style={{border:'1px solid black', display:'inline-block', padding:'5px'}}>
            Name: {props.name} <br/>
            Age: {props.age} <br/>
            Branch: {props.branch} 
        </div>
    )
}

export default Card
