import React from 'react'

function Practice8Card(props) {
    return (
        <div style={{border:'1px solid black', margin:'5px', textAlign:'center', background:'pink'}}>
            <p>Question: {props.data.question}</p>
            <p>Punch Line: {props.data.punch}</p>
        </div>
    )
}

export default Practice8Card
