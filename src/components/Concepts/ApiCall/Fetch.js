import React, { useEffect, useState } from 'react'

function App() {
    const [data, setData]= useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => setData(res))
    },[])

    return (
        <div>
            {
                data.map(item => <div key={item.id}>{item.name}</div>)
            }
        </div>
    )
}

export default App
