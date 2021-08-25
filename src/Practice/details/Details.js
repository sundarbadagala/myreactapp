import React from 'react'
import { storeProducts } from './productsData'
import { useParams } from 'react-router'

const users=[
    {name:'vanky', age:3},
    {name:'ajay', age:2},
    {name:'vinay', age:32}
]

function Details() {
    const {title}= useParams()
    console.log(title)
    let data= storeProducts.find(item => item.id === parseInt(title))
    console.log(data)
    console.log(data.title)
    return (
        <div>
            Name : {data.company} {data.name} <br/>
            Price: {data.price} <br/>
            Info: {data.info}

        </div>
    )
}

export default Details
