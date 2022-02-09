import React, { Component } from 'react'

export class ListRendering extends Component {
    render() {
        const names=['Ajay','Amar','Arun','Akhil','Alok']
        const namesList= names.map(item => <h3>{item}</h3>)
        return (
            <div>
                Showing List of names array by using Map<hr/>
                {namesList}                
            </div>
        )
    }
}

export default ListRendering
