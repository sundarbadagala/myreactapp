import React, { useState } from 'react'

const Data=[
    {
        id:1,
        name:'ajay',
        age:23,
        desc:'ajay is very good boy, he is very innocent'
    },
    {
        id:2,
        name:'karan',
        age:34,
        desc:'karan is very good boy, he is very innocent'
    },
    {
        id:3,
        name:'ram',
        age:14,
        desc:'ram is very good boy, he is very innocent'
    },
]

function Review3() {
    const [people, setPeople]= useState(Data)
    return (
        <div>
            {
                people.map((person, personIndex) =>{
                    const {id, name}=person
                    return <div key={id}>{name}</div>
                })
            }
        </div>
    )
}

export default Review3
