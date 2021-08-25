import React from 'react'

const employee = [
    {id:101, name:'Ajay', location:'Vizag'},
    {id:102, name:'Amar', location:'Srikakulam'},
    {id:103, name:'Akhil', location:'Guntur'},
    {id:104, name:'Anil', location:'Hyderabda'},
]

class App extends React.Component{
    render() {
        const value = employee.map(item => 
            <div key={item.id} style={{border:'1px solid red'}}><Details item={item}/></div>
            )
        return (
            <div>
                <h3 style={{border:'2px solid black'}}>{value}</h3>
            </div>
        )
    }
}

class Details extends React.Component{
    render() {
        const {id, name, location}= this.props.item
        return (
            <div>
                {id} : {name} - {location}
            </div>
        )
    }
}

export default App