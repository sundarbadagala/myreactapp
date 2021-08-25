import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Card from './Card'

function List() {
    const [list, setList] = useState([])
    useEffect(()=>{
        axios.get('https://api.spacexdata.com/v3/launches')
        .then(res => setList(res.data))
        .catch(error => error)
    })
    return (
        <div>
            {
                list.map((item, index) => <Link key={index} to={'/launch/'+item.flight_number} className='text-decoration-none text-dark'><Card {...item}/></Link>)
            }
        </div>
    )
}

export default List
