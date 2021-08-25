import React, { Component } from 'react'

export class ListRendering2 extends Component {
    render() {
        const persons = [
            {
                id:1,
                name:'Ajay',
                age:23
            },
            {
                id:2,
                name:'Akhil',
                age:45
            },
            {
                id:3,
                name:'Amar',
                age:85
            }
        ]
        const personList = persons.map( (item,index) => <h3 key={index}>{index} My name is {item.name}, and my age is {item.age}</h3>)
        return (
            <div>
                Show persons details of object from array by mapping<hr/>
                and apply INDEX as unique key id
                {personList}
            </div>
        )
    }
}

export default ListRendering2
