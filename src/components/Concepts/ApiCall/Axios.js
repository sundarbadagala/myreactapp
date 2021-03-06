import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
    const [data, setData]= useState([])
    const [error, setError]= useState('')
    useEffect(()=>{
        axios.get('https://sfdrpprod.ekohi.com/api/school/GetDemeritSchoolsByUserId/1?loginId=Jorge.jurado')
        .then(res => setData(res.data))
        .catch(error => setError(error.message))
    },[])
    console.log(data)
    return (
        <div>
            {/* {
                data.map(item => <div key={item.id}>{item.name}</div>)
            }
            {
                error
            } */}
        </div>
    )
}

export default App
