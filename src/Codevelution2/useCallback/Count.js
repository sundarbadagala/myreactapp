import React from 'react'

function Count(props) {
    console.log('rendering', props.text)
    return (
        <div>
            <h3>{props.text} - {props.value}</h3>
        </div>
    )
}

export default React.memo(Count)
