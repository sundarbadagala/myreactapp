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
                    <Child onChange={this.getData}/><br/>
                    Name: {this.state.name}<br/>
                    Age: {this.state.age}<br/>
            </div>
        )
    }
}

class Child extends React.Component{
    state={
        name: 'ajay',
        age: 23
    }
    sendData=(name, age)=>{
        this.props.onChange(this.state.name, this.state.age)
    }
    render() {
        return (
            <div>
                    <input type='button' value='Send Data' onClick={this.sendData}/>
            </div>
        )
    }
}

export default Parent;