import React from 'react'

function Error(props) {
    return (
        <div className='border border-danger'>
            {props.children}
        </div>
    )
}

export default Error
