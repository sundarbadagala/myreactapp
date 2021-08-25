import React from 'react'
import './styles.css'
import JokeData from './ScrimbaData'
import JokeCard from './ScrimbaSub'

function Scrimba() {
    const JokeComponent = JokeData.map( item=> <JokeCard card={item} key={item.id}/>)
    return (
        <div>
            {JokeComponent}
        </div>
    )
}

export default Scrimba
