import React from 'react'
import Card from './DisplayAnswerSub'

const Data=[
    {
        id:1,
        question:'Prime Minister of India',
        answer:'Narendra Modi'
    },
    {
        id:2,
        question:'Which state having highest costal area?',
        answer:'Gujarath'
    },
    {
        id:3,
        question:'Water formula?',
        answer:'H20'
    },
    {
        id:4,
        question:'color of heamoglobin?',
        answer:'Red'
    },
    {
        id:5,
        question:'1+1?',
        answer:'2'
    },
    
]

function DisplayAnswer() {
    return (
        <div>
        {
            Data.map(item => <Card key={item.id} {...item}/>)
        }
        </div>
    )
}

export default DisplayAnswer
