import React from 'react'

class Parent extends React.Component{
    state={
        name: 'AJAY',
        age: 20
    }
    render() {
        return (
            <div>
                <Child name={this.state.name} age={this.state.age}/>
            </div>
        )
    }
}

class Child extends React.Component{
    render() {
        return (
            <div>
                This is child<br/>
                name: {this.props.name}<br/>
                age: {this.props.age}<br/><br/>
                
                <SubChild name={this.props.name} age={this.props.age}/>
            </div>
        )
    }
}

class SubChild extends React.Component{
    render() {
        return (
            <div>
                This is sub child<br/>
                name: {this.props.name}<br/>
                age: {this.props.age}<br/>
            </div>
        )
    }
}
export default Parent;