import React, { useState } from 'react'
import {addTodo, deleteTodo} from '../redux/actions/actions'
import {useDispatch, useSelector} from 'react-redux'
import Card from './todoDetailsCard'

function Todo() {
    const todos= useSelector(state => state.todo.todos)
    const dispatch = useDispatch()
    const [task, setTask]= useState('')
    console.log('todos', todos)
    const submitHandler=(e,task)=>{
        e.preventDefault()
        dispatch(addTodo(task))
        setTask('')
    }
    const clickHandler=(id)=>{
        dispatch(deleteTodo(id))
    }
    const changeHandler=()=>{
        
    }
    return (
        <div>
            <form onSubmit={(e)=>submitHandler(e, task)}>
                <input type='text' value={task} onChange={(e)=>setTask(e.target.value)}/>
                <button type='submit'>Add</button>
            </form>
            <ul>
                {
                    todos.map(item => 
                        <Card todo={item.todo} key={item.id} clickHandler={()=>clickHandler(item.id)} changeHandler={(e)=>changeHandler(e)} task={task}/>
                    )
                }
            </ul>
        </div>
    )
}

export default Todo
