import React from 'react'

class Parent extends React.Component{
    state={

    }
    getData=(name, age)=>{
        this.setState({
            name: name,
            age:age
        });
    }
    render() {
        return (
            <div>
                <Child onChange={this.getData}/>
                Name: {this.state.name}<br/>
                Age: {this.state.age}
            </div>
        )
    }
}

class Child extends React.Component{
    state={
        name: 'ajay',
        age: 23
    }
    onClickListener=(name, age)=>{
        this.props.onChange(this.state.name, this.state.age)
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