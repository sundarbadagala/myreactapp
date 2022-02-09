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
            <Details key={item.id} id={item.id} name={item.name} location={item.location}/>
            )
        return (
            <div>
                {value}
            </div>
        )
    }
}

class Details extends React.Component{
    render() {
        return (
            <div>
                {this.props.id} : {this.props.name} - {this.props.location}
            </div>
        )
    }
}

export default App