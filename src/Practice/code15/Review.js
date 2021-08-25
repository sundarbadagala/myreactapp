import React, { useState } from 'react'

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
    const [index, setIndex]= useState(0)
    const finalIndex = Data.length - 1
    const clickIncrement=()=>{
        if(index !== finalIndex){
            setIndex(index + 1)
        }else{
            setIndex(0)
        }
    }
    const clickDecrement=()=>{
        if(index !== 0){
            setIndex(index - 1)
        }else{
            setIndex(finalIndex)
        }
    }
    const clickRandom=()=>{
        const rand = Math.round(Math.random()*finalIndex)
        setIndex(rand)
        console.log(rand)
    }
    const {id, name, job, age}= Data[index]
    return (
        <div style={{border:'1px solid black', width:'400px', margin:'auto', fontSize:'20px'}}>
            <div style={{ margin:'auto', width:'160px'}}>
                ID: {id} <br/>
                Name : {name} <br/>
                Age : {age} <br/>
                Job : {job} <br/>
                <button  onClick={clickDecrement}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                <button  onClick={clickIncrement}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                <button onClick={clickRandom}>random</button>
            </div>
        </div>
    )
}

export default Review
