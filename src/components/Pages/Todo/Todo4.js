import React, { useState } from 'react'

function Todo4() {
    const [items, setItems]= useState('')
    const [itemList, setItemList]= useState([])
    const changeHandler=(e)=>{
        setItems(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        setItemList([...itemList, {key:Date.now(), task:items}])
    }
    const deleteItems=(key)=>{
        setItemList(itemList.filter(item => item.key !== key))
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type='text' value={items} onChange={changeHandler}/>
                <button type='submit'>Add</button>
            </form>
            {
                itemList.map(item => <div key={item.key}>{item.task} <button onClick={()=>deleteItems(item.key)}>X</button></div>)
            }
        </div>
    )
}

export default Todo4
