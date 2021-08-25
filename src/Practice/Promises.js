import React from 'react'
import axios from 'axios'

function Promises() {
    fetch('https://api.github.com/users')
    .then(Response => Response.json())
    .then(result => console.log(result))
    .catch(error => console.log(error))
    return (
        <div>
            
        </div>
    )
}

export default Promises
