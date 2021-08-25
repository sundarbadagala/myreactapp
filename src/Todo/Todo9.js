import React, {useState} from 'react'

function Todo9() {
    const [task, setTask]= useState('')
    const [taskList, setTaskList]= useState([])
    const handleChange=(e)=>{
        setTask(e.target.value)
    }
    const AddTask=()=>{
        if(task !== ''){
            const taskDetails={
                id: Math.floor(Math.random()*1000),
                value: task,
                isCompleted: false
            }
            setTaskList([...taskList, taskDetails])
            setTask('')
        }
        setTask('')
    }
    const deleteTask=(id)=>{
        setTaskList(taskList.filter(t => t.id !== id))
    }
    const completeTask=(id)=>{
        const element= taskList.findIndex((elem)=> elem.id === id)
        const newTaskList= [...taskList]
        newTaskList[element]={
            ...newTaskList[element],
            isCompleted:true,
        }
        setTaskList(newTaskList)
    }
    return (
        <div>
            <input type='text' name='text' onChange={handleChange}/>
            <button onClick={AddTask}>Add</button>
            {
                taskList.map(t => <div style={{color: t.isCompleted?'red':''}} key={t.id}>{t.value} <button onClick={()=>completeTask(t.id)}>complted</button><button onClick={()=>deleteTask(t.id)}>delete</button></div>)
            }
        </div>
    )
}

export default Todo9
