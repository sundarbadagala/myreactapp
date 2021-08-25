import React, { useState } from 'react'

function Todo3() {
    const [currentItem, setCurrentItem]= useState('')
    const [itemList, updateItemList]= useState([])
    const onchangeHandler=(e)=>{
        setCurrentItem(e.target.value)
    }
    const addItemToList=()=>{
        updateItemList([...itemList, {items:currentItem, key:Date.now()}])
        setCurrentItem('')
    }
    const deleteFromList=(key)=>{
        updateItemList(itemList.filter(item => item.key !== key))
    }
    return (
        <div>
            <input type='text' value={currentItem} onChange={onchangeHandler}/>
            <button onClick={addItemToList}>Add</button>
            {
                itemList.map(item => 
                    <div key={item.key}>
                        {item.items} 
                        <button onClick={()=>deleteFromList(item.key)}>
                            x
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default Todo3
