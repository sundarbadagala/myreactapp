import React, { useEffect, useState } from 'react'

const Data=[
    {
        id:1,
        name:'Vinay',
        job:'web',
        age:23
    },
    {
        id:2,
        name:'Amith',
        job:'Testing',
        age:29
    },
    {
        id:3,
        name:'Ram',
        job:'Civil',
        age:90
    },
    {
        id:4,
        name:'Kiran',
        job:'Contractor',
        age:12
    },
    {
        id:5,
        name:'Chanti',
        job:'Executive',
        age:67
    },
    {
        id:6,
        name:'Prasanth',
        job:'Programmer',
        age:12
    },
    {
        id:7,
        name:'Janu',
        job:'Developer',
        age:12
    },
]

function Review() {
    const stylesMain={
        color:'red',
        display:'flex',
        border:'1px solid black',
        margin:'auto',
        width:'250px'
    }
    const stylesInfo={
        margin:'20px',
        width:'300px',
        display:'block'
    }
    const styleBtn={
        margin:'auto'
    }
    const [value, setValue]= useState(0)
    const clickIncrement=()=>{
        if(value !== 5){
            setValue(value + 1)
        }else{
            setValue(0)
        }
    }
    const clickDecrement=()=>{
        if(value !== 0){
            setValue(value -1)
        }else{
            setValue(5)
        }
    }
    useEffect(()=>{
        const interval = setInterval(clickIncrement, 1000)
        return ()=>{
            clearInterval(interval)
        }
    },[clickIncrement])
    const {id, name, job, age}= Data[value]
    return (
        <div style={stylesMain}>
            <div style={styleBtn}>
                <button onClick={clickDecrement}>previous</button>
            </div>
            <div style={stylesInfo}>
                {id}<br/>
                {name}<br/>
                {age}<br/>
                {job}<br/>
            </div>
            <div style={styleBtn}>
                <button onClick={clickIncrement}>next</button>
            </div>
        </div>
    )
}

export default Review
