import React from 'react'

function Button(props) {
    console.log('rendering button', props.increase)
    return (
        <div>
            <button onClick={props.clickHandler}>{props.increase}</button>
        </div>
    )
}

export default React.memo(Button)
