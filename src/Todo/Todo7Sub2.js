import {useState} from 'react'

function useList(value, reset){
    const [itemList, setItemList]=useState([])
    const clickHandler=(e)=>{
        e.preventDefault()
        setItemList([...itemList, {key:Date.now(), task:value}])
        reset()
    }
    const deleteItems=(key)=>{
        setItemList(itemList.filter(item=> item.key !== key))
    }
    return [ itemList, clickHandler, deleteItems]
}
export default useList
