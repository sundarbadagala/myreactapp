import React, { useEffect, useState } from 'react'

function Storage() {
    const [task, setTask]= useState('')
    const [list, setList]= useState([])
    const changeHandler=(e)=>{
        setTask(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        let lst=list && list.length?[...list,{id:Date.now(), task: task}]:[{id:Date.now(), task: task}];
        task !== '' && setList(lst)
        setTask('')
    }
    const deleteItem=(id)=>{
        if(list.length > 1){
            setList(list.filter(item => item.id !== id))
        }else{
            localStorage.removeItem('task')
            setList([])
        }
    }
    useEffect(()=>{
        if(list && list.length){
            localStorage.setItem('task', JSON.stringify(list))
        }
    },[list])
    useEffect(()=>{
        setList(JSON.parse(localStorage.getItem('task')))
    },[])
    console.log(list)
    return (
        <div>
            <form onSubmit={(e)=>submitHandler(e)}>
                <input type='text' placeholder='Task' value={task } onChange={(e)=>changeHandler(e)}/>
                <button type='submit'>Submit</button>
            </form>
            <ol>
            {
                list && list.length>0 && list.map(item => <li key={item.id}>{item.task} <button onClick={()=>deleteItem(item.id)}>delete</button></li>)
            }
            </ol>
        </div>
    )
}

export default Storage
