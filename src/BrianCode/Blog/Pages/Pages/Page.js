import React from 'react'
import './styles.css'

function Home(props) {
    return (
        <div className='main'>
            {props.title}
        </div>
    )
}

export default Home
