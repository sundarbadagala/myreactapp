import React from 'react'
import useInput from './Todo7Sub'
import useList from './Todo7Sub2'
import Todos from './Todo8Sub'

function Todo7() {
    const [value, bind, reset]= useInput('')
    const [listItems,addItem, deleteItem]= useList(value, reset)
    return (
        <div>
            <form onSubmit={addItem}>
                <input type='text' {...bind}/>
                <button type='submit'>add</button>
            </form>
            <Todos itemList={listItems} deleteItems={deleteItem}/>
        </div>
    )
}

export default Todo7
