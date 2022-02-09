import React, { useState } from 'react'

function Practice() {
    const [task, setTask]= useState('')
    const [taskList, setTaskList]= useState([])
    const changeHandler=(e)=>{
        setTask(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        setTaskList([...taskList, {items:task, id:Date.now()}])
        setTask('')
    }
    const clickHandler=(id)=>{
        setTaskList(taskList.filter(item => item.id !== id))
    }
    const changeValue=(id, text)=>{
        taskList.map(item =>{
            if(item.id === id){
                item.items = text
            }
        })
        setTaskList([...taskList])
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type='text' value={task} onChange={changeHandler}/>
                <button type='submit'>Submit</button>
            </form>
            <ul>
            {
                taskList.map(item => <li key={item.id}><input type='text' value={item.items} onChange={(e)=>changeValue(item.id, e.target.value)}/> <button onClick={()=>clickHandler(item.id)}>x</button></li>)
            }
            </ul>
        </div>
    )
}

export default Practice
