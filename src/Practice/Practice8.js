import React from 'react'
import JokeData from './Practice8Data'
import JokeCard from './Practice8Card'

function Practice8() {
    const JokeComponent= JokeData.map( item =>
        <JokeCard data={item}/>
        )
    return (
        <div>
            {JokeComponent}
        </div>
    )
}

export default Practice8
