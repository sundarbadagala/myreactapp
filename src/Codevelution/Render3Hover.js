import React from 'react'

function Render3Hover(props) {
    return (
        <div>
            <h2 onMouseOver={props.incrementCount}>Hovered {props.count}</h2>
        </div>
    )
}

export default Render3Hover
