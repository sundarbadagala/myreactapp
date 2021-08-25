//HERE WE ARE PASSING INFO FROM CHILD2 TO CHILD1 THROUG PARENT
//CHILD TO CHILD COMMUNICATION
//SIBLING COMMUNICATION
import React from 'react'

class Parent extends React.Component{
    state={

    }
    getData=(name, age)=>{
        this.setState({
            name: name,
            age:age
        })
    }
    render() {
        return (
            <div>
                <Child2 onChange={this.getData} />
                <Child1 name={this.state.name} age={this.state.age}/>
            </div>
        )
    }
}

class Child1 extends React.Component{
    render() {
        return (
            <div>
                Name: {this.props.name}<br/>
                Age: {this.props.age}
            </div>
        )
    }
}

class Child2 extends React.Component{
    state={
        name: 'ajay',
        age: 23
    }
    onClickListener=(name, age)=>{
        this.props.onChange(this.state.name, this.state.age);
    }
    render() {
        return (
            <div>
               <button onClick={this.onClickListener}>Send Data</button>
            </div>
        )
    }
}

export default Parent;