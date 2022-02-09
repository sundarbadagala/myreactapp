import React from 'react'

function Todo2Sub({message, id, deleteNote}) {
    return (
        <div>
            <p>{message} {id}</p>
            <button onClick={()=>deleteNote(id)}>x</button>
        </div>
    )
}

export default Todo2Sub
