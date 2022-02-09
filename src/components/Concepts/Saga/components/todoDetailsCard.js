import React,{useState} from 'react'

function Card({todo, id, clickHandler, task, changeHandler}) {
    const [edit, setEdit]= useState(false)
    return (
        <li>
            {
                edit ? <input type='text' value={task} onChange={changeHandler}/> : todo
            }
            <button onClick={(id)=>clickHandler(id)}>delete</button>
            <button onClick={()=>setEdit(!edit)}>
                {
                    edit ? 'update' : 'edit' 
                }
            </button>
        </li>
    )
}

export default Card
