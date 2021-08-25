import React from 'react'
import './styles.css'
import Button from './Button'

function Comp(props) {
    return (
        <div className={props.color ? 'lite':'dark'}>
        <div className={props.position ? 'main-right' : 'main-left'}>
                <div className='cm-details'>
                    <div className='title'>{props.name}</div>
                    <header className='header'>{props.header}</header>
                    <p>{props.details}</p>
                    <div className='cm-btn'>
                    <Button buttonStyle={props.btnStyle}>{props.btn}</Button>
                    </div>
                </div>
                <div className='cm-logo'>
                    <h1>{props.logo}</h1>
                </div>
        </div>
        </div>
    )
}

export default Comp
