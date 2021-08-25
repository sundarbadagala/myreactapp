import React from 'react'

function ScrimbaSub(props) {
    return (
        <div>
            <h4 style={{display: props.card.question?'block':'none'}}>Question: {props.card.question}</h4>
            <h4 style={{display: props.card.punchline?'block':'none'}}>Punch Line:{props.card.punchline} </h4>
            <hr/>
        </div>
    )
}

export default ScrimbaSub
