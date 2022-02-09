import React from 'react'
//import Card from './Card'
import Card from './Card2'

const data=[
    {
        name:'Hari',
        age:'23',
        branch:'civil'
    },
    {
        name:'Ram',
        age:'65',
        branch:'ECE'
    },
    {
        name:'Vijay',
        age:'34',
        branch:'Mech'
    },
    {
        name:'Kumar',
        age:'99',
        branch:'CSE'
    },
]


function Index() {
    return (
        <div>
            {
                data.map(item => 
                    <Card {...item} />)
            }
        </div>
    )
}

export default Index
