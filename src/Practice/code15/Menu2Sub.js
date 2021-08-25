import React from 'react'

function Menu2Sub(props) {
    return (
        <div>
            <h3>{props.job} <button onClick={props.clickHandler}>{props.show}</button></h3>
            <h5>{props.name}</h5>
        </div>
    )
}

export default Menu2Sub
