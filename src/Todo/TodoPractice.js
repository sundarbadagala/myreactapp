import React, { useState } from 'react'
import useInput from './TodoPracticeUseInput'

function TodoPractice() {
  const [items, bind, reset]= useInput('')
  const [itemList, setItemList]= useState([])
  
  const submitHandler=(e)=>{
    e.preventDefault()
    setItemList([...itemList, {key: Date.now(), task:items}])
    reset()
  }
  const clickHandler=(key)=>{
    setItemList(itemList.filter(item => item.key !== key))
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='text' {...bind}/>
        <button type='submit'>Add</button>
      </form>
      {
        itemList.map(item => <div key={item.key}>{item.task} <button onClick={()=>clickHandler(item.key)}>x</button></div>)
      }
    </div>
  )
}

export default TodoPractice
