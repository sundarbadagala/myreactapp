import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Search() {
    const [search, setSearch]= useState('')
    const [data, setData]= useState([])
    const [submitValue, setSubmitValue]= useState('')
    const [categoryCompany, setCategoryCompany]= useState('all')
    const [categoryPrice, setCategoryPrice]= useState('')
    const [value, setValue]= useState([])
    useEffect(()=>{
        axios.get('http://localhost:8900/data')
        .then(res => setData(res.data))
        .catch(error => console.log(error))
    },[])
    const submitHandler=(e)=>{
        e.preventDefault()
        setSubmitValue(search)
    }
    useEffect(()=>{
        categoryCompany ==='all' ? setValue(data) : setValue(data.filter(item => item.company === categoryCompany))
    },[categoryCompany, data])
    const filterProducts=(e)=>{
        setCategoryCompany(e.target.value)
    }
    const sortProducts=(e)=>{
        setCategoryPrice(e.target.value)
        const sort = e.target.value
        setValue(
            value.slice().sort((a,b)=>(
                sort === 'lowest' ? ((a.price > b.price) ? 1 : -1) :
                sort === 'highest' ? ((a.price < b.price)? 1 : -1) : ((a.id < b.id) ? 1 : -1)
            ))
        )
        console.log(sort)

    }
    return (
        <div>
        <form onSubmit={submitHandler}>
            <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search mobile Here'/>
            <button type='submit'>Search</button>
        </form>
        <select value={categoryCompany} onChange={(e)=>filterProducts(e)}>
            <option value='all'>All</option>
            <option value='Samsung'>Samsung</option>
            <option value='Redmi'>Redmi</option>
        </select>
        <select value={categoryPrice} onChange={(e)=>sortProducts(e)}>
            <option value='latest'>Latest</option>
            <option value='lowest'>Lowest to Highest</option>
            <option value='highest'>Highest to Lowest</option>
        </select>
        <div>{value.length} Products</div>
            {
                value
                    .filter(item => item.title.toLowerCase().includes(submitValue.toLocaleLowerCase()) || item.company.toLowerCase().includes(submitValue.toLocaleLowerCase()))
                    .map(item => <div key={item.id}>{item.company} {item.title} {item.price}/-</div>)
            }
        </div>
    )
}

export default Search