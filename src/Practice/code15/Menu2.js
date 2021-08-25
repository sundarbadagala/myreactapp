import React, { useState } from 'react'
import Card from './Menu2Sub'
import './Menu2.css'

const Data=[
    {
        id:1,
        job:'founder',
        name:'kiran',
        details:'kiran is the founder of space x'
    },
    {
        id:2,
        job:'producer',
        name:'dill raju',
        details:'produced many films like dill'
    },
    {
        id:3,
        job:'director',
        name:'rajamouli',
        details:'famous director made well known films bahubali'
    },
]

function Menu2() {
    const [data, setData]=useState([])
    const [show, setShow]= useState(false)
    const [value, setValue]= useState(0)
    const {id, job, name, details}= Data[value]
    return (
        <div className='mn-main'>
            <div>
                {
                    Data.map((item, index) => <div><button onClick={()=>setValue(index)} className={`mn-btn ${index === value && 'mn-btn-active'}`}>{item.job}</button></div>)
                }
            </div>
            <div>
                {name}<br/>
                {details}
            </div>
        </div>
    )
}

export default Menu2

