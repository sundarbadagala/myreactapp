import React, { useState } from 'react'
import {Button} from 'react-bootstrap'

function Index() {
    const [value, setValue] = useState('')
    const [list, setList] = useState([])
    const changeHandler=(e)=>{
        setValue(e.target.value)
    }
    const addToItems=(e)=>{
        e.preventDefault()
        setList([...list, {items:value, key:Date.now()}])
        setValue('')
    }
    const deleteItem=(key)=>{
        setList(list.filter(item => item.key !== key))
    }
    const updateItems=(text, key)=>{
        list.map(item =>{
            if(item.key === key){
                item.items = text
            }
        })
        setList([...list])
    }
    return (
        <div>
            <form onSubmit={addToItems}>
                <input type='text' value={value} onChange={changeHandler}/>
                <Button variant='outline-dark py-0 ml-1' type='submit'>Add</Button>
            </form>
            {
                list.map(item => 
                    <div key={item.key}>
                        <input type='text' value={item.items} id={item.key} onChange={(e)=>updateItems(e.target.value, item.key)} />
                        <Button variant='outline-dark px-1 py-0' onClick={()=>deleteItem(item.key)}>x</Button>
                    </div>
                )
            }
        </div>
    )
}

export default Index
