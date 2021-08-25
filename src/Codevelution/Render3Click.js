import React from 'react'

function Render3Click(props) {
    return (
        <div>
            <button onClick={props.incrementCount}>Clicked {props.count} Times</button>
        </div>
    )
}

export default Render3Click
