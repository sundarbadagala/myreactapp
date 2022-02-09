import React from 'react'
import { useState } from 'react'
import Note from './Todo2Sub'

function Todo2() {
    const [notes, setNotes]= useState([
    ])
    const [input, setInput]= useState('')
    const handleSubmit=(e, notes, setNotes, input, setInput)=>{
        e.preventDefault()
        const id=(notes.length) ? notes[notes.length-1].id+1 : 0
        setNotes([...notes, {id:id, message:input}])
        setInput('')
    }
    const deleteNote=(id, notes, setNotes)=>{
        setNotes(notes.filter(note=> note.id !== id))
    }
    return (
        <div>
            <form onSubmit={(e)=>handleSubmit(e, notes, setNotes, input, setInput)}>
                <input type='text' onChange={(e)=>setInput(e.target.value)} value={input}/>
                <button type='submit'>Add</button>
            </form>
            {
                notes.map(note => (
                    <Note message={note.message} key={note.id} id={note.id} deleteNote={(id)=>deleteNote(id, notes, setNotes)}/>
                ))
            }
        </div>
    )
}

export default Todo2
