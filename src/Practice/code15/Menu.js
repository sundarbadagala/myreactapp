import React, { useEffect, useState } from 'react'

const Data=[
    {
        id:1,
        name:'upma',
        cost:10,
        category:'breakfast'
    },
    {
        id:2,
        name:'chapati',
        cost:20,
        category:'dinner'
    },
    {
        id:3,
        name:'rice',
        cost:60,
        category:'lunch'
    },
    {
        id:4,
        name:'parota',
        cost:20,
        category:'dinner'
    },
    {
        id:5,
        name:'biryani',
        cost:100,
        category:'lunch'
    },
    {
        id:6,
        name:'puri',
        cost:20,
        category:'breakfast'
    },
    {
        id:7,
        name:'idly',
        cost:10,
        category:'breakfast'
    },
]

function Menu() {
    const [data, setData]= useState([])
    const [category, setCategory]= useState('all')
    useEffect(()=>{
        category === 'all' ? setData(Data) : setData(Data.filter(item => item.category === category))
    },[category])
    return(
        <div>
            <button onClick={()=>setCategory('all')}>all</button>
            <button onClick={()=>setCategory('breakfast')}>breakfast</button>
            <button onClick={()=>setCategory('lunch')}>lunch</button>
            <button onClick={()=>setCategory('dinner')}>dinner</button>
            {
                data.map(item => <div>{item.name}</div>)
            }
        </div>
    )
}

export default Menu
