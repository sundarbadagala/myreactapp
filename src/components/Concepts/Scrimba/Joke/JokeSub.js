//Hide the unnecessary property, particulary for once
import React from 'react'

function Joke(props){
    return(
        <div>
        <p style={{display: props.question? 'block':'none'}}>Question: {props.question}</p>
        <p style={{display: props.punchline? 'display':'none', color:props.question? 'display':'#888888'}}>Punchline: {props.punchline}</p>
        <hr/>
        </div>
    );
}

export default Joke;