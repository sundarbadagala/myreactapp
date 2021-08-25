/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import {menuItems} from './menuItems'

function Menu() {
    const [value, setValue]= useState('all')
    const [sorting, setSorting]=useState('new')
    const [data, setData]= useState([])
    const [sortData, setSortData]= useState([])
    const changeHandler=(e)=>{
        setValue(e.target.value)
    }
    const changeSortHandler=(e)=>{
        console.log(e.target.value)
    }
    useEffect(()=>{
        value === 'all' ? setData(menuItems) : setData(menuItems.filter(item=> item.category=== value))
    },[value])
   console.log(data)
    return (
        <div>
            <select onChange={changeHandler}>
                <option value='all'>all</option>
                <option value='fruit'>fruit</option>
                <option value='nuts'>nuts</option>
                <option value='sijay'>how are you</option>
            </select>
            <select onChange={changeSortHandler}>
                <option value='new'>newest</option>
                <option value='low'>low to high</option>
                <option value='high'>high to low</option>
            </select>
        </div>
    )
}

export default Menu
