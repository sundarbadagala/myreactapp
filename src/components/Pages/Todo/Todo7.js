import React from 'react'
import useInput from './Todo7Sub'
import useList from './Todo7Sub2'

function Todo7() {
    const [value, bind, reset]= useInput('')
    const [clickHandler, itemList, deleteItems]= useList(value, reset)
    return (
        <div>
            <input type='text' {...bind}/>
            <button onClick={clickHandler}>add</button>
            {
                itemList.map(item => <div key={item.key}>{item.task} <button onClick={()=>deleteItems(item.key)}>x</button></div>)
            }
        </div>
    )
}

export default Todo7
