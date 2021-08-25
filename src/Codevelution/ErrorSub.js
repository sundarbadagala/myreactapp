import React from 'react'

function ErrorSub({heroName}) {
    if(heroName==='joker'){
        throw new Error('Joker is not Hero!')
    }
    return (
        <div>
            <h3 style={{color:'green'}}>{heroName}</h3>
        </div>
    )
}

export default ErrorSub
